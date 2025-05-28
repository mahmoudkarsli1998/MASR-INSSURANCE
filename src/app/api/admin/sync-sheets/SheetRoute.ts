// import { NextRequest, NextResponse } from 'next/server';
// import { google } from 'googleapis';
// import { adminDb } from '@/lib/firebaseAdmin';

// const SHEET_ID = '131VxoDitxPAe9TPRGU0fBt0S6A1Dm4aUr2oJtlvOYmw'; // User provided Sheet ID
// const SERVICE_ACCOUNT_KEY_PATH = './google-sheets-service-account.json';
// const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
// const SHEET_NAME = 'Customers'; // Assuming the sheet name is 'Customers', adjust if needed

// async function getGoogleSheetsClient() {
//   const auth = new google.auth.GoogleAuth({
//     keyFile: SERVICE_ACCOUNT_KEY_PATH,
//     scopes: SCOPES,
//   });
//   const client = await auth.getClient();
//   const sheets = google.sheets({ version: 'v4', auth: client });
//   return sheets;
// }

// export async function POST(request: NextRequest) {
//   try {
//     console.log('Starting Google Sheets sync...');
//     const sheets = await getGoogleSheetsClient();

//     // 1. Fetch customer data from Firebase
//     console.log('Fetching customer data from Firebase...');
//     const customersSnapshot = await adminDb.collection('customers').get();
//     if (customersSnapshot.empty) {
//       console.log('No customer data found in Firebase.');
//       return NextResponse.json({ message: 'No customer data found to sync.' }, { status: 200 });
//     }

//     const customers = customersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     console.log(`Fetched ${customers.length} customers.`);

//     // 2. Prepare data for Google Sheets
//     // Assuming headers are: ID, Name, Email, Phone, etc.
//     // Adjust headers based on actual customer data structure
//     const headers = Object.keys(customers[0] || {});
//     const dataRows = customers.map(customer => headers.map(header => customer[header as keyof typeof customer] ?? ''));

//     const values = [
//       headers, // Add header row
//       ...dataRows
//     ];

//     // 3. Clear existing data (optional - clearing A1:Z range)
//     console.log(`Clearing existing data from sheet: ${SHEET_NAME}`);
//     await sheets.spreadsheets.values.clear({
//       spreadsheetId: SHEET_ID,
//       range: `${SHEET_NAME}!A1:Z`, // Adjust range if needed
//     });
//     console.log('Sheet cleared.');

//     // 4. Write new data to Google Sheets
//     console.log(`Writing ${values.length} rows to sheet: ${SHEET_NAME}`);
//     const resource = {
//       values,
//     };

//     const result = await sheets.spreadsheets.values.update({
//       spreadsheetId: SHEET_ID,
//       range: `${SHEET_NAME}!A1`, // Start writing from A1
//       valueInputOption: 'USER_ENTERED',
//       requestBody: resource,
//     });

//     console.log('Google Sheets sync completed successfully.');
//     return NextResponse.json({ message: 'Sync successful', updatedCells: result.data.updatedCells }, { status: 200 });

//   } catch (error: any) {
//     console.error('Error syncing to Google Sheets:', error);
//     return NextResponse.json({ error: 'Failed to sync data to Google Sheets', details: error.message }, { status: 500 });
//   }
// }


import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { adminDb } from '@/lib/firebaseAdmin';
import { Firestore, Query, DocumentData } from 'firebase-admin/firestore';

const SHEET_ID = '131VxoDitxPAe9TPRGU0fBt0S6A1Dm4aUr2oJtlvOYmw';
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_NAME = 'Leads';

async function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      project_id: process.env.GOOGLE_SHEETS_PROJECT_ID,
    },
    scopes: SCOPES,
  });
  
  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

// Function to flatten nested objects and convert timestamps
function flattenData(obj: any, prefix = ''): any {
  const result: any = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (value === null || value === undefined) {
        result[newKey] = '';
      } else if (value && typeof value === 'object' && value.constructor === Object) {
        // Handle nested objects
        Object.assign(result, flattenData(value, newKey));
      } else if (value && typeof value.toDate === 'function') {
        // Handle Firestore timestamps
        result[newKey] = value.toDate().toISOString();
      } else if (value instanceof Date) {
        // Handle regular dates
        result[newKey] = value.toISOString();
      } else {
        // Handle primitive values
        result[newKey] = String(value);
      }
    }
  }
  
  return result;
}

export async function POST(request: NextRequest) {
  try {
    console.log('Starting Google Sheets sync...');
    const sheets = await getGoogleSheetsClient();

    // 1. Fetch ALL leads data from Firebase with proper error handling
    console.log('Fetching leads data from Firebase...');
    const leadsSnapshot = await adminDb.collection('leads').get();
    
    if (leadsSnapshot.empty) {
      console.log('No leads data found in Firebase.');
      return NextResponse.json({ message: 'No leads data found to sync.' }, { status: 200 });
    }

    // 2. Process all documents and flatten the data
    const processedLeads: any[] = [];
    const allFields = new Set<string>();

    leadsSnapshot.docs.forEach((doc) => {
      const data = { id: doc.id, ...doc.data() };
      const flattenedData = flattenData(data);
      processedLeads.push(flattenedData);
      
      // Keep track of all possible fields
      Object.keys(flattenedData).forEach(field => allFields.add(field));
    });

    console.log(`Processed ${processedLeads.length} leads with fields:`, Array.from(allFields));

    // 3. Create consistent data structure
    const sortedFields = Array.from(allFields).sort();
    const dataRows = processedLeads.map(lead => 
      sortedFields.map(field => lead[field] || '')
    );

    const values = [
      sortedFields, // Header row with all fields
      ...dataRows
    ];

    // 4. Clear existing data
    console.log(`Clearing existing data from sheet: ${SHEET_NAME}`);
    try {
      await sheets.spreadsheets.values.clear({
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A:Z`,
      });
      console.log('Sheet cleared successfully.');
    } catch (clearError) {
      console.log('Could not clear sheet, it might not exist. Creating new data...');
    }

    // 5. Write new data to Google Sheets
    console.log(`Writing ${values.length} rows (including header) to sheet: ${SHEET_NAME}`);
    const result = await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });

    console.log('Google Sheets sync completed successfully.');
    return NextResponse.json({ 
      message: 'Sync successful', 
      totalRecords: processedLeads.length,
      totalFields: sortedFields.length,
      updatedCells: result.data.updatedCells,
      fields: sortedFields
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error syncing to Google Sheets:', error);
    return NextResponse.json({ 
      error: 'Failed to sync data to Google Sheets', 
      details: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}

// GET route for fetching leads with improved data handling
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filterField = searchParams.get('filterField');
    const filterValue = searchParams.get('filterValue');
    const limit = parseInt(searchParams.get('limit') || '100');
    
    console.log(`Fetching leads with filter: ${filterField}=${filterValue}, limit: ${limit}`);
    
    const collectionRef = adminDb.collection('leads');
    let query: Query<DocumentData> = collectionRef;

    // Apply filter if provided
    if (filterField && filterValue) {
      query = query.where(filterField, '==', filterValue);
    }

    // Apply limit to prevent overwhelming responses
    query = query.limit(limit);

    const snapshot = await query.get();

    if (snapshot.empty) {
      console.log('No leads found');
      return NextResponse.json({ 
        leads: [], 
        total: 0,
        message: 'No leads found'
      }, { status: 200 });
    }

    // Process and flatten all leads data
    const leads = snapshot.docs.map(doc => {
      const data = { id: doc.id, ...doc.data() };
      return flattenData(data);
    });

    console.log(`Retrieved ${leads.length} leads`);

    return NextResponse.json({ 
      leads, 
      total: leads.length,
      sampleFields: leads.length > 0 ? Object.keys(leads[0]) : []
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error fetching leads:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch leads data', 
      details: error.message 
    }, { status: 500 });
  }
}

// New endpoint for automatic syncing - call this to trigger sync
export async function PUT(request: NextRequest) {
  try {
    console.log('Triggering automatic sync...');
    
    // Call the POST method internally
    const syncRequest = new NextRequest(request.url, {
      method: 'POST',
      headers: request.headers
    });
    
    const result = await POST(syncRequest);
    const resultData = await result.json();
    
    return NextResponse.json({
      ...resultData,
      syncTriggered: true,
      timestamp: new Date().toISOString()
    }, { status: result.status });
    
  } catch (error: any) {
    console.error('Error in automatic sync:', error);
    return NextResponse.json({ 
      error: 'Failed to trigger automatic sync', 
      details: error.message 
    }, { status: 500 });
  }
}
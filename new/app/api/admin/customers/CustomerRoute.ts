import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filterField = searchParams.get('filterField');
    const filterValue = searchParams.get('filterValue');
    const collectionRef = adminDb.collection('customers'); // Assuming 'customers' collection

    let query: FirebaseFirestore.Query<FirebaseFirestore.DocumentData>;

    if (filterField && filterValue) {
      // Basic equality filter - adjust as needed for more complex filtering (e.g., range, contains)
      query = collectionRef.where(filterField, '==', filterValue);
    } else {
      // No filter, get all customers (consider pagination for large datasets)
      query = collectionRef;
    }

    const snapshot = await query.get();

    if (snapshot.empty) {
      return NextResponse.json({ customers: [] }, { status: 200 });
    }

    const customers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json({ customers }, { status: 200 });

  } catch (error: any) {
    console.error('Error fetching customers:', error);
    return NextResponse.json({ error: 'Failed to fetch customer data', details: error.message }, { status: 500 });
  }
}


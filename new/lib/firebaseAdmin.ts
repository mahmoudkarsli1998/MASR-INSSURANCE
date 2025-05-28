import * as admin from 'firebase-admin';

const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH || './masr-inssurance-firebase-adminsdk-fbsvc-ae55dc671e.json';

try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountPath),
      // Add databaseURL if using Realtime Database
      // databaseURL: process.env.FIREBASE_DATABASE_URL
    });
    console.log('Firebase Admin SDK Initialized');
  } else {
    console.log('Firebase Admin SDK already initialized');
  }
} catch (error: any) {
  console.error('Firebase Admin SDK initialization error:', error.stack);
}

export const adminDb = admin.firestore();
export const adminAuth = admin.auth();


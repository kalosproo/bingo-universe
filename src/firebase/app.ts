import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyApB7McuGWcBEnizCqn05rK-WmIdX-FttU',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'bingoverse-beb9e.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'bingoverse-beb9e',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'bingoverse-beb9e.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '1033071869446',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:1033071869446:web:7943d628d8190365104d87',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-XLV1L6CW72',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = isSupported().then((supported) => (supported ? getAnalytics(app) : null));

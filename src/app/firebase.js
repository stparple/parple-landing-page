import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPdEHPJelvobp3fYcXRueG_ZlCMyq95jk",//process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'parple-1abe2.firebaseapp.com',
  databaseURL: 'https://parple-1abe2-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'parple-1abe2',
  storageBucket: 'parple-1abe2.appspot.com',
  messagingSenderId: '1059717973002',
  appId: '1:1059717973002:web:11b5c4c53b38b8baed4bf3',
  measurementId: 'G-6MCZEL0WVB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app; // Export the Firebase app instance

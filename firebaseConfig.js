import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
 initializeAuth,
 getReactNativePersistence,
 getAuth,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyC9uw-1KREjx8KENkcAguC1HaJ0iNoASw8",
    authDomain: "week1labs-d3949.firebaseapp.com",
    projectId: "week1labs-d3949",
    storageBucket: "week1labs-d3949.firebasestorage.app",
    messagingSenderId: "803467338809",
    appId: "1:803467338809:web:241da48e61b6632ea7d9e8"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (e) {
  auth = getAuth(app);
}
export { auth };
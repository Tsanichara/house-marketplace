import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqifGxcMbw38_na6AfXU7T6Eii_c9ok4Y",
  authDomain: "house-marketplace-af01c.firebaseapp.com",
  projectId: "house-marketplace-af01c",
  storageBucket: "house-marketplace-af01c.appspot.com",
  messagingSenderId: "792076630493",
  appId: "1:792076630493:web:00a803de73a8a4d8da9e34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
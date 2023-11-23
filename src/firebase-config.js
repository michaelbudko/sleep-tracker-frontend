import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7vtJdJ-LHOh4ndEOLJEe07kVP02HKbS0",
  authDomain: "sleeptracker-326c8.firebaseapp.com",
  projectId: "sleeptracker-326c8",
  storageBucket: "sleeptracker-326c8.appspot.com",
  messagingSenderId: "436562941401",
  appId: "1:436562941401:web:d09038a00e68da7ef575c8",
  measurementId: "G-B4LY76YPD7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);



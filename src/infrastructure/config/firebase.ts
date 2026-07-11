import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import * as dotenv from "dotenv";

dotenv.config();

const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY || "fake-api-key",
  authDomain:
    process.env.FIREBASE_AUTH_DOMAIN ||
    `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.FIREBASE_PROJECT_ID || "pos-unimar",
});

const db = app.firestore();
db.useEmulator("127.0.0.1", 8080);

const auth = app.auth();
auth.useEmulator("http://127.0.0.1:9099");

export { db, auth };

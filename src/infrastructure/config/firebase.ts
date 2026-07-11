import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import * as dotenv from "dotenv";

dotenv.config();

process.env.FIRESTORE_EMULATOR_HOST = "127.0.0.1:8080";
process.env.FIRESTORE_AUTH_EMULATOR_HOST = "127.0.0.1:9099";

// process.env.FIRESTORE_EMULATOR_HOST = "192.168.0.30:8080";
// process.env.FIRESTORE_AUTH_EMULATOR_HOST = "192.168.0.30:9099";

const app = firebase.initializeApp({
  projectId: process.env.FIREBASE_PROJECT_ID || "pos-unimar",
});

export const db = app.firestore();
export const auth = app.auth();
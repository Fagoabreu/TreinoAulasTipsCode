import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import React from "react";

const apiKey = proccess.env.REACT_APP_API_KEY;
const authDomain = proccess.env.REACT_APP_AUTH_DOMAIN;
const projectId = proccess.env.REACT_APP_PROJECT_ID;
const storageBucket = proccess.env.REACT_APP_STORAGE_BUCKET;
const messagingSenderId = proccess.env.REACT_APP_MESSAGING_SENDER_ID;
const appId = proccess.env.REACT_APP_APP_ID;

const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
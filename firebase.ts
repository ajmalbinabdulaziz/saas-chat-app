import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";


const firebaseConfig = {
    apiKey: "AIzaSyAWFqplgMyzMp9w4qQr-_zyDXBDX-0YeQg",
    authDomain: "saas-translator-app-320e1.firebaseapp.com",
    projectId: "saas-translator-app-320e1",
    storageBucket: "saas-translator-app-320e1.appspot.com",
    messagingSenderId: "105647115651",
    appId: "1:105647115651:web:70e785b24de15c341e3ab6"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)
  const functions = getFunctions(app)

  export { db, auth, functions }


  
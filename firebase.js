import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCF9WYZP_m8-yZ_Tu0VvPV9GdSF3EB7re4",
  authDomain: "uber-clone-b94a8.firebaseapp.com",
  projectId: "uber-clone-b94a8",
  storageBucket: "uber-clone-b94a8.appspot.com",
  messagingSenderId: "955033995336",
  appId: "1:955033995336:web:946b815e91330d7523f07d",
  measurementId: "G-3JET0M9M8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };

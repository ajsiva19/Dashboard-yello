import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvr0tp0cXKGz3D_X2H9L3Y9RkFOXun8rs",
  authDomain: "sample-firebase-ai-app-dd8b9.firebaseapp.com",
  projectId: "sample-firebase-ai-app-dd8b9",
  storageBucket: "sample-firebase-ai-app-dd8b9.firebasestorage.app",
  messagingSenderId: "799726882934",
  appId: "1:799726882934:web:39d226b9f32a5159d34f57"
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export { auth, googleProvider }


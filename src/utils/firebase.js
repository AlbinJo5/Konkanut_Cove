// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD156yYQNB-RZ3TRoLAAgq_fTETVFYMJyA",
    authDomain: "brew-crew-576f4.firebaseapp.com",
    projectId: "brew-crew-576f4",
    storageBucket: "brew-crew-576f4.appspot.com",
    messagingSenderId: "316487742948",
    appId: "1:316487742948:web:1753d840b86091bcff43f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
const auth = getAuth(app);


// AUTHENTICATION

export async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const resp = {
            status: true,
            data: userCredential.user
        }
        return resp;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const resp = {
            status: false,
            errorMessage: errorMessage,
            errorCode: errorCode
        }
        return resp;
    }
}

export async function logout() {
    try {
        await signOut(auth);
        const resp = {
            status: true
        }
        return resp;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const resp = {
            status: false,
            errorMessage: errorMessage,
            errorCode: errorCode
        }
        return resp;
    }
}

export async function resetPassword(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        const resp = {
            status: true
        }
        return resp;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const resp = {
            status: false,
            errorMessage: errorMessage,
            errorCode: errorCode
        }
        return resp;
    }
}

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1HS0-hqjynrAiIlrRblCW3Z5mtY_mmHE",
  authDomain: "movie-matchmaker-81be9.firebaseapp.com",
  projectId: "movie-matchmaker-81be9",
  storageBucket: "movie-matchmaker-81be9.firebasestorage.app",
  messagingSenderId: "531193630407",
  appId: "1:531193630407:web:79e723ec47eb86ba3338e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};
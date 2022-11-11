import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyBzUzS9aHCS7D2MABjKF5ZUTmYVKj3lpk8",
        authDomain: "twitter-clone-6d23d.firebaseapp.com",
        projectId: "twitter-clone-6d23d",
        storageBucket: "twitter-clone-6d23d.appspot.com",
        messagingSenderId: "968449462556",
        appId: "1:968449462556:web:556574259beb2095306ad9",
        measurementId: "G-NZJKPP3978"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
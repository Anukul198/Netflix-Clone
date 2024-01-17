// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyBLdXt-Y4aTi0AQsgvp2-6RjVsCATFvXx8",
    authDomain: "netflix-react-47cd8.firebaseapp.com",
    projectId: "netflix-react-47cd8",
    storageBucket: "netflix-react-47cd8.appspot.com",
    messagingSenderId: "386610654399",
    appId: "1:386610654399:web:725b033e9fe72112116a0a",
    measurementId: "G-V587BS6XYJ"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(firebaseApp);

export { auth };
export default db;


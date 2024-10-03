
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDXOK0Cno7oGMnbBGEwVBXkUYrfTBEMXsE",
  authDomain: "tienda-dougan.firebaseapp.com",
  projectId: "tienda-dougan",
  storageBucket: "tienda-dougan.appspot.com",
  messagingSenderId: "1043923862905",
  appId: "1:1043923862905:web:60edb5737195f5da63dba8"
};


const app = initializeApp(firebaseConfig);

export { app };
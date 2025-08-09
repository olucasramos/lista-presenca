// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoYD76hkblEATVh89kXSRj3Af2IQr9OWg",
  authDomain: "controle-presenca-7b02d.firebaseapp.com",
  projectId: "controle-presenca-7b02d",
  storageBucket: "controle-presenca-7b02d.appspot.com",
  messagingSenderId: "390592922783",
  appId: "1:390592922783:web:923e437eb1dc920ae88eaa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

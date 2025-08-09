// Importar SDK do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Configuração do Firebase (substitua pelo seu)
const firebaseConfig = {
  apiKey: "AIzaSyAoYD76hkblEATVh89kXSRj3Af2IQr9OWg",
  authDomain: "controle-presenca-7b02d.firebaseapp.com",
  projectId: "controle-presenca-7b02d",
  storageBucket: "controle-presenca-7b02d.firebasestorage.app",
  messagingSenderId: "390592922783",
  appId: "1:390592922783:web:923e437eb1dc920ae88eaa"
  measurementId: "G-GQ6QZTXR4B"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exemplo: adicionar funcionário
async function adicionarFuncionario(nome) {
  try {
    await addDoc(collection(db, "funcionarios"), {
      nome: nome,
      criadoEm: new Date()
    });
    alert("Funcionário adicionado!");
  } catch (e) {
    console.error("Erro ao adicionar: ", e);
  }
}

// Exemplo: listar funcionários
async function listarFuncionarios() {
  const querySnapshot = await getDocs(collection(db, "funcionarios"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

// Testes iniciais
listarFuncionarios();

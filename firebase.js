// Importa os módulos do Firebase (versão modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref, set, get, child, update, remove } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB7bfyqvuKEPjC-Wchk2qoE6cEHz94Ln3s",
    authDomain: "controle-de-presencas.firebaseapp.com",
    databaseURL: "https://controle-de-presencas-default-rtdb.firebaseio.com",
    projectId: "controle-de-presencas",
    storageBucket: "controle-de-presencas.firebasestorage.app",
    messagingSenderId: "329637142585",
    appId: "1:329637142585:web:0ee7c006c0091767926de8"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Exporta funções e variáveis para uso em outros arquivos, incluindo 'app'
export { app, db, ref, set, get, child, update, remove };

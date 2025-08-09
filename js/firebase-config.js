// js/firebase-config.js
// ---------------------
// Substitua os valores abaixo pelos da sua app Web no Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAoYD76hkblEATVh89kXSRj3Af2IQr9OWg",
  authDomain: "controle-presenca-7b02d.firebaseapp.com",
  projectId: "controle-presenca-7b02d",
  storageBucket: "controle-presenca-7b02d.firebasestorage.app",
  messagingSenderId: "390592922783",
  appId: "1:390592922783:web:923e437eb1dc920ae88eaa",
  measurementId: "G-GQ6QZTXR4B"
};

// Inicializa Firebase (compat)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// Pequena API para facilitar uso nas páginas
window.DB = {
  // Funcionários
  async getFuncionarios() {
    const snap = await db.collection('funcionarios').orderBy('nome').get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },
  async addFuncionario(obj) {
    obj.criadoEm = firebase.firestore.FieldValue.serverTimestamp();
    const ref = await db.collection('funcionarios').add(obj);
    return ref.id;
  },
  async updateFuncionario(id, obj) {
    await db.collection('funcionarios').doc(id).update(obj);
  },
  async deleteFuncionario(id) {
    await db.collection('funcionarios').doc(id).delete();
  },
  async getFuncionarioById(id) {
    const doc = await db.collection('funcionarios').doc(id).get();
    return { id: doc.id, ...doc.data() };
  },

  // Obras
  async getObras() {
    const snap = await db.collection('obras').orderBy('nome').get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },
  async addObra(obj) {
    const ref = await db.collection('obras').add(obj);
    return ref.id;
  },
  async deleteObra(id) {
    await db.collection('obras').doc(id).delete();
  },

  // Presenças (chamadas)
  // record = { funcionarioId, data: 'YYYY-MM-DD', status, atestado: true/false, obraId, tipoFuncionario }
  async savePresenca(record) {
    await db.collection('presencas').add(record);
  },
  // busca presenças entre datas (inclusive). data armazenada como 'YYYY-MM-DD'
  async getPresencasBetween(from, to) {
    const snap = await db.collection('presencas')
                        .where('data', '>=', from)
                        .where('data', '<=', to)
                        .get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }
};

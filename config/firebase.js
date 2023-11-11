import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyABUCqWlDgAJvNbBOAgtL0WBms-shyxaFo",
  authDomain: "tasks-cae00.firebaseapp.com",
  projectId: "tasks-cae00",
  storageBucket: "tasks-cae00.appspot.com",
  messagingSenderId: "1074665173924",
  appId: "1:1074665173924:web:f3952036b7b247933bc731"
};

// Verificar se o Firebase já foi inicializado antes de inicializá-lo novamente
const firebaseApp = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

// Exportar a instância de autenticação do Firebase
export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();

export default firebaseApp;
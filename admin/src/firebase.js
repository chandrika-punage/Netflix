import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCTRpHiq0Z5W3TMYAuPHMSRS0JDOrwEIt0",
  authDomain: "netflix-6ad0c.firebaseapp.com",
  projectId: "netflix-6ad0c",
  storageBucket: "netflix-6ad0c.firebasestorage.app",
  messagingSenderId: "968977387818",
  appId: "1:968977387818:web:cdcd5fd62c704074dc0e53",
  measurementId: "G-5D32SHQSRK"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
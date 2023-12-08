import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjr0-gORmFvQWAg-a7_wzaKkycgcgFYYE",
    authDomain: "proyecto-coder-9e884.firebaseapp.com",
    projectId: "proyecto-coder-9e884",
    storageBucket: "proyecto-coder-9e884.appspot.com",
    messagingSenderId: "400035385597",
    appId: "1:400035385597:web:bff0a2ddf576211bc0ae94"
  };

//   export const appFirestore = initializeApp(firebaseConfig);

  const app = initializeApp(firebaseConfig);
  const db  = getFirestore(app);

  export const initFirestore = () => app
  export { db };
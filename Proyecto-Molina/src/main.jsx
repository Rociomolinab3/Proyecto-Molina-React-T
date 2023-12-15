import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initFirestore } from './Firebase/config.js'
import { initializeApp } from "firebase/app";
// import { initFirestore } from '../components/Firebase/config.js'
// initFirestore()

const firebaseConfig = {
  apiKey: "AIzaSyDjr0-gORmFvQWAg-a7_wzaKkycgcgFYYE",
  authDomain: "proyecto-coder-9e884.firebaseapp.com",
  projectId: "proyecto-coder-9e884",
  storageBucket: "proyecto-coder-9e884.appspot.com",
  messagingSenderId: "400035385597",
  appId: "1:400035385597:web:bff0a2ddf576211bc0ae94"
};

export const appFirestore = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

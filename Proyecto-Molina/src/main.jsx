import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initFirestore } from './Firebase/config.js'
// import { initializeApp } from "firebase/app";
// import { initFirestore } from '../components/Firebase/config.js'
initFirestore()


// export const appFirestore = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

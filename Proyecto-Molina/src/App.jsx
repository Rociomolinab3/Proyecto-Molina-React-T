import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import {getFirestore, doc, getDoc, getDocs, collection,where, query} from 'firebase/firestore'
import { initFirestore } from './Firebase/config.js'
import { useEffect,useState } from 'react'
import { CartProvider } from "./Context/CartContext.jsx"
import Cart from './components/Cart/Cart.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
import { appFirestore } from './main.jsx'


function App() {
  // const [product, setProduct] = useState({})

  // useEffect(()=>{
  //   const db = getFirestore(appFirestore);
  //   const ref= doc(db,'items','7B9OuAIp12FX1IiKxlxr');
  //   console.log("esta funcionando")
  //   getDoc(ref).then((response)=>{
  //     if(response.exists()){
  //       console.log("dato del getDoc", response.data());
  //       setProduct({
  //         id: response.id,
  //         ...response.data()
  //       })
  //       console.log("producto",product);
  //     }
  //     else{
  //       console.log("Item no encontrado")
  //     }
  //   })
  // },[])
  
  // useEffect(()=>{console.log("producto",product)},[product])
  return (
    <div className='app bg-gray-600 w-fit-content'>
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path='/category/:categoryId' element={<ItemListContainer />} />
    <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
    <Route path = '/cart' element={<h1 className="text-white text-xl text-bold">Proximamente verá su carrito aquí.</h1>}/>
    <Route path='/checkout' element={<Checkout/>} />
    <Route path='*' element={<h1 className="text-white text-xl text-bold">404 NOT FOUND</h1>} />
    </Routes>
    <Footer/>
    </CartProvider>
    </BrowserRouter>
    </div>
  )
}

export default App;

import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app bg-gray-600 w-fit-content'>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path='/category/:categoryId' element={<ItemListContainer />} />
    <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
    <Route path='*' element={<h1>404 NOT FOUND</h1>} />
    <Route path='/CART' element={<h3>PROXIMAMENTE VERÁ AQUÍ SU CARRITO DE COMPRAS</h3>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
     
    </div>
  )
}

export default App

import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({id,name,img,category,description, price, stock})=>{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext);
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    
        const item = {
          id,
          img,
          name,
          price
        }

        addItem(item, quantity)
      }

    return(
      <div className="bg-green-300 w-2/3 p-4 m-6 rounded-lg">
      <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full">
        <div className="flex justify-center">
          <div className="w-2/3">
            <h2 className="text-white text-3xl font-bold mb-4">{name}</h2>
          </div>
        </div>
        <div className="flex flex-row">
        <div className="flex justify-center">
          <div className="w-full mx-auto mb-4">
            <img className="w-full h-full object-cover object-center rounded-md" src={img} alt={name} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/5">
            <div className="mb-4">
              <h6 className="text-gray-300">Categoría: {category}</h6>
              <h6 className="text-gray-300">Descripción: {description}</h6>
              <h1 className="text-gray-300">Precio: ${price}.000</h1>
            </div>
            <div className="mb-4">
              <a href="#" className="content">
                {quantityAdded > 0 ? (
                  <Link to='/cart' className="buttoncart">
                    Terminar compra
                  </Link>
                ) : (
                  <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
              </a>
            </div>
          </div>
          <div className="flex justify-center">
          <Link to='/'>
            <button className="buttoncount">Volver</button>
          </Link>
        </div>
        </div>
       
        </div>
      </div>
    </div>
    )
}

export default ItemDetail;
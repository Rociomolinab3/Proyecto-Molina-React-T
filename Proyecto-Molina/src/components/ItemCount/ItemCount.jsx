import { useState } from "react";

const ItemCount = ({stock,initial,onAdd}) =>{
     const [quantity, setQuantity] = useState(initial)

     const increment = ()=>{
        if(quantity<stock){
            setQuantity(quantity+1)
        }
     }

     const decrement = ()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
     }

     return(
      <>
      <div>
      <div className="controls flex justify-center items-center">  {/* Controles de cantidad */}
      <button className="bg-gray-500 border border-green-800 rounded p-2 m-3 text-antiquewhite" onClick={decrement}>-</button>
      <h4 className="text-white">{quantity}</h4>
        <button className="bg-gray-500 border border-green-800 rounded p-2 m-3 text-antiquewhite" onClick={increment}>+</button>
      </div>
      <div> 
        <button className="bg-gray-300 border border-green-700 rounded px-4 py-2 text-white mt-2" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
        </button>
          </div>
      </div>
      
      
      </>
     )
}

export default ItemCount;
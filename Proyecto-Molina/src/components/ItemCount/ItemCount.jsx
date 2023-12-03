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
        <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2 text-white">
        <button
          className="bg-gray-700 border border-gray-300 rounded px-2 py-1 font-bold"
          onClick={decrement}
        >
          -
        </button>
        <h5>{quantity}</h5>
        <button
          className="bg-gray-700 border border-gray-300 rounded px-2 py-1 font-bold"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div>
        <button
          className={`bg-gray-800 border border-green-500 rounded px-4 py-2 text-antiquewhite ${
            !stock && 'opacity-50 cursor-not-allowed'
          }`}
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
     )
}

export default ItemCount;
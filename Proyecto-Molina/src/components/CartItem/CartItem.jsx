import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import './CartItem.css'

const CartItem = ({id, img, name, quantity, price}) =>{

    const {removeItem} = useContext(CartContext);

    const handleRemove= ()=>{
        removeItem(id);
    }

    return (
        <div className="col-md-2 mb-4 d-flex m-auto">
          <div className="card__item__final">
            <picture className="picture__card">
                {/* Mostrar imagen si está disponible */}
              {img && <img className="picture__card__svg" src={img} alt={name} />}
            </picture>
             {/* Mostrar nombre, cantidad, precio unitario y subtotal del item */}
            <h5 className="cart__item__p">{name}</h5>
            <p className="cart__item__p">Cantidad: {quantity}</p>
            <p className="cart__item__p">Precio unitario: ${price}</p>
            <p className="cart__item__p">Subtotal: ${quantity * price}</p>
             {/* Botón para eliminar el item del carrito */}
              <button onClick={handleRemove} className="btn btn-delete">
                Eliminar
              </button>
          </div>
        </div>
      )
}

export default CartItem;
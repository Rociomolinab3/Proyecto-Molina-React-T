import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {

    const { cart, clearCart, checkoutC } = useContext(CartContext);
    const total = cart.reduce((acc, item) => acc + item.quantity * item.price ,0 )

    const handleClear = () => {
        clearCart();
    }

    return (
        <div className="container">
          {cart.length !== 0 ? (
             // Si hay elementos en el carrito, mostrarlos
            <>
              <div className="cart__grid">
                {cart.map((item) => (
                  <CartItem key={item.id} id={item.id} name={item.name} quantity={item.quantity} price={item.price} img={item.img} />
                ))}
              </div>
              <div className="cart__total">
                <p>Total: ${total}</p>   {/* Mostrar el total de la compra */}
                {!checkoutC && (  // Mostrar botón para limpiar el carrito si no se ha iniciado el proceso de checkout
                  <button onClick={handleClear} className="btn btn-danger">
                    Limpiar Carrito
                  </button>
                )}
              </div>
              {!checkoutClicked && cart.length > 0 && (  // Mostrar enlace para ir al proceso de checkout si no se ha iniciado el proceso de checkout y hay elementos en el carrito
                <Link to="/checkout" className="btn btn-success checkout">
                  Checkout
                </Link>
              )}
            </>
          ) : (
             // Si no hay elementos en el carrito, mostrar mensaje y enlace para ir al inicio
            <div>
              <h1 className="cart__empty">No hay items en el carrito</h1>
              <Link to="/" className="btn__start">
                Ir al Inicio
              </Link>
            </div>
          )}
        </div>
      )
}

export default Cart;
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    cart:[],
    totalQuantity:0,
    addItem: ()=>{},
    removeItem: ()=>{},
    clearCart: ()=>{},
    checkout: false,
    setCheckout: (value)=>{}
});

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [checkoutC, setCheckoutC ] = useState(false);

    useEffect(()=>{
        const total = () =>{
            const newTotal = cart.reduce((total,item) => total + item.quantity, 0)
            setTotalQuantity(newTotal);
        }
        total();
    },[cart])


const addItem = (item, quantity) =>{
    if(!inCart(item.id)){
        setCart((prev)=>[...prev,{...item,quantity}]);
        setCheckoutC(false)
    }
    else{
        console.log("El prod ya se encuentra en el carrito.")
    }
}

const removeItem = (itemId) => {
 const cartUpdate = cart.filter((prod)=>prod.id !== itemId);
 setCart(cartUpdate);
}

const clearCart = () => {
    setCart([]);
    setCheckoutC(false);
}

const inCart = (itemId) =>{
 return cart.some((prod)=>prod.id === itemId);
}

return(
    <CartContext.Provider value={{cart,totalQuantity,addItem,removeItem,clearCart,checkoutC, setCheckoutC}}>
        {children}
    </CartContext.Provider>
)
}

export default CartProvider;
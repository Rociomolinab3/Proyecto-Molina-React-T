import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { writeBatch, collection, query, getDocs, where, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../Firebase/config";
import CheckoutForm from "../CheckoutForm/Checkoutform";
import './Checkout.css';

const Checkout = ()=>{
    const [ loading, setLoading ] = useState(false);
    const [ orderId, setOrderId ] =useState('')

    const {cart, total, clearCart} = useContext(CartContext);
    console.log("total el checkout", total)
    const totalAmount = cart.reduce ((acc, item) => acc+item.price*item.quantity,0);
    
    const createOrder = async ({name,phone,email}) =>{
        setLoading(true);
        try {
            const objOrder={
                buyer:{
                    name,
                    phone,
                    email
                },
                items:cart,
                total: totalAmount,
                date: Timestamp.fromDate(new Date())
            };
            const batch = writeBatch(db);

            const withoutStock = await checkStock(cart,batch);

            if(withoutStock.length === 0){
                await batch.commit();
                const orderAdded = await addOrderToFirestore(objOrder);
                clearCart();
            }
        } finally {
            setLoading(false);
        }
    };

    const checkStock = async (cart,batch) =>{
        const outOfStock = [];

        const ids = cart.map(prod=>prod.id);
        const productsRef = collection(db,'products');
        const productsAddedFromFirestore = await getDocs(query(productsRef, where ('id', 'in', ids)))
        const {docs} = productsAddedFromFirestore;

        if(docs && docs.length>0){
            docs.forEach(doc=>{
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
            
                const productAddedToCart = cart.find(prod=>prod.id === dataDoc.id)
                const prodQuantity = productAddedToCart?.quantity;
                
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref,{stock: stockDb-prodQuantity});  
                }
                else {
                    outOfStock.push({id:dataDoc.id,...dataDoc})
                }
            })
        }
        return outOfStock
    };

    const addOrderToFirestore = async (objOrder)=>{
        const orderRef = collection(db,'orders');
        return await addDoc(orderRef,objOrder);

    }

    return(
        <div>
        {loading ? (
          <h2 className="order__id">Se está generando su orden...</h2>
        ) : (
          <>
            {orderId ? (
              <h3 className="check__order">El id de su orden es: {orderId}</h3>
            ) : (
              <div>
                <h4 className="checkout__form">Checkout para finalizar compra</h4>
                <CheckoutForm onConfirm={createOrder} />
              </div>
            )}
          </>
        )}
      </div>
    )
}

export default Checkout;
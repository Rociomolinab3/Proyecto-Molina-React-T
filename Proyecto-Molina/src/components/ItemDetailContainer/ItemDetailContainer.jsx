import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {itemId} = useParams();
    
    useEffect(() => {
        const fetchData = async()=>{
            const dbFirestore = getFirestore()
            const queryDoc = doc(dbFirestore,'products',itemId)
        
            try {
                const docData= await getDoc(queryDoc);
                if(docData.exists()){
                    console.log("datos del producto", docData.data)
                    setProduct({
                        id:docData.id,
                        ...docData.data()
                    });
                }
            } catch (error) {
                console.log("error al traer los productos",error)
            }
        }   
        fetchData()
        // getProductById(itemId)
        //     .then(response => {
        //         setProduct(response)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
    }, [itemId])

    return(
        <div className="flex bg-gray-700 justify-center">
         {product ? <ItemDetail {...product} /> :
         <p>Cargando detalle del producto...</p>
         }   
        </div>
    )
}

export default ItemDetailContainer;
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams, Link } from "react-router-dom";
// import style from '../ItemListContainer/ItemListContainer.module.css'
import { getFirestore,collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading]= useState(true);
    const {category, itemId} = useParams();

    useEffect(() => {
        const fetchProducts= async()=>{
            const dbFirestore = getFirestore();
            const productsCollection = collection(dbFirestore,'products');
            let filterQuery;

            if (category) {
                
                filterQuery = query(productsCollection, where('category', '==', category));
              } else {
                
                filterQuery = productsCollection;
              }
              try {
                const snapshot = await getDocs(filterQuery);
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
              } catch (error) {
                console.error('Error fetching products:', error);
              }
              setLoading(false);
              
        }
        // const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        // asyncFunc(categoryId)
        //     .then(response => {
        //         console.log("Products loaded:", response);
        //         setProducts(response)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
        fetchProducts();
    }, [category])

    return(
        <div>
            { loading ? <p>cargando</p>:
                products.map((product)=>{
                    <p>{product.name}</p>
                })
            }
            {/* <ItemList products={products}/> */}
        </div>
    )
}

export default ItemListContainer;
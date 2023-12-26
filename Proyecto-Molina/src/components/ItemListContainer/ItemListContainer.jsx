import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getFirestore,collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading]= useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        console.log("category",categoryId)
        const fetchProducts= async()=>{
            const dbFirestore = getFirestore();
            const productsCollection = collection(dbFirestore,'products');
            console.log('productos',productsCollection)
            let filterQuery;

            if (categoryId) {
              filterQuery = query(productsCollection, where('category', '==', categoryId));
            } else {
              // Si no hay una categoría especificada, simplemente obtén todos los productos
              filterQuery = productsCollection;
            }
      
            try {
              const response = await getDocs(filterQuery);
              setProducts(response.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
              console.error('Error fetching products:', error);
            }
      
            setLoading(false);
          };
      
          fetchProducts();
        }, [categoryId]);

    return(
        <div className="flex flex-wrap justify-center">
            {
              loading ? <p>Cargando...</p> :
                products.map((product)=>(
                <div className="bg-gray-200 mx-4 mt-8 w-80 transform overflow-hidden rounded-lg dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                <img className="h-48 w-full object-cover object-center" src={product.img} alt={product.id} />
                <div className="p-4 flex flex-col justify-between">
                <div>
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.name}</h2>
                </div>
                <div className="flex flex-col items-center justify-around">
                <p className="text-base font-medium text-gray-500">{product.category}</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">${product.price}.000</p>
                <p className="text-base font-medium text-blue-500"> <a>
                <Link to={`/item/${product.id}`}>Ver detalle</Link>
                </a></p>
                </div>
                </div>
                </div>
              ))
            }
        </div>
           
    )
}

export default ItemListContainer;
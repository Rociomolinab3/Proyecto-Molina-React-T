import { Filter } from "./Filter";
import { Link } from "react-router-dom";
import Item from '../Item/Item'

const ItemList = ({products}) =>{
const productsFiltered = ({products, filterState, handleFilterChange})=> (
    <>
     <div className="container mt-3">
        <label>Buscar</label>
        <input
          className="form-control"
          onChange={handleFilterChange}
        />
      </div>
      <div className="container mt-3">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <Item {...product} />
              <div className="card-footer">
                <Link to={`/detail/${product.id}`}>
                  <button className="btn btn-outline-dark w-100">Detalle</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
    </>
);

return (
    <Filter products={products}>
        {productsFiltered}
    </Filter>
)
}



// const ItemList = ({products}) => {
//     if(!products){
//         return <h1>Can't found products.</h1>
//         }
//     return(
//         <div className="flex justify-center flex-wrap">
//             {products.map(prod => <Item key={prod.id} {...prod} />)}
//         </div>
//     )
// }

export default ItemList;


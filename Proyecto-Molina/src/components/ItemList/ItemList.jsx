import Item from "../Item/Item";
import style from '../ItemList/ItemList.module.css';
// import Spinner from "../Spinner/Spinner";

const ItemList = ({products}) => {
    if(!products){
        return <h1>Can't found products.</h1>
        }
    return(
        <div className="flex justify-center flex-wrap">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;


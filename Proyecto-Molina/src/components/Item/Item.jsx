import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, category }) => {
  return (
    <div className="bg-gray-200 mx-4 mt-8 w-80 transform overflow-hidden rounded-lg dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img className="h-48 w-full object-cover object-center" src={img} alt={id} />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{name}</h2>
          {/* <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{category}</p> */}
        </div>
        <div className="flex flex-col items-center justify-around">
         
          <p className="text-base font-medium text-gray-500">{category}</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">${price}.000</p>
          <p className="text-base font-medium text-blue-500"> <a>
          <Link to={`/item/${id}`}>Ver detalle</Link>
          </a></p>
        </div>
      </div>
    </div>
  );
};

export default Item;
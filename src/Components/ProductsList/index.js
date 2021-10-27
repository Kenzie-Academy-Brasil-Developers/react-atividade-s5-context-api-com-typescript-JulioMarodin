import ProductsCard from "../ProductsCard";
import "./style.css";

const ProductsList = ({ list, isCart }) => {
  return (
    <div>
      <div className="title">
        <h2>{isCart ? "Cart" : "Products List"}</h2>
      </div>
      <ul>
        {list.map((product, index) => (
          <li key={index}>
            <ProductsCard product={product} isCart={isCart} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;

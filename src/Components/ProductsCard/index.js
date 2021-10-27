import { useCart } from "../../Providers/Cart";
import "./styles.css";

const ProductsCard = ({ product, isCart }) => {
  const { addProduct, deleteProduct } = useCart();

  return (
    <div className="container">
      <img
        className={`product${product.id}`}
        src={product.image}
        alt={product.title}
      />
      <h4>{product.title}</h4>
      <h4 className="price">{`R$ ${product.price.toFixed(2)}`}</h4>
      {isCart ? (
        <button onClick={() => deleteProduct(product)}>Remove</button>
      ) : (
        <button onClick={() => addProduct(product)}>Add to cart</button>
      )}
    </div>
  );
};

export default ProductsCard;

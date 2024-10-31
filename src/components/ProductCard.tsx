import { Link } from "react-router-dom";
import { Product } from "../types/interface";

const ProductCard: React.FC<Product> = ({
  title,
  description,
  image,
  price,
  id,
}) => {
  return (
    <>
      <div className="border-zinc-200 border-4 p-4 flex flex-col place-items-center">
        <Link to={`/product/${id}`}>
          <h1 className="text-2xl h-40">{title}</h1>
        </Link>
        <img src={image} alt="product image" className="h-60 w-60" />
        <p className="py-4">Description: {description}</p>
        <p className="align-bottom">Price: {price}$</p>
      </div>
    </>
  );
};

export default ProductCard;

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/productsContext";

const ProductDetails: React.FC = () => {
  const { productID } = useParams();
  const { products } = useContext(ProductsContext);
  console.log(products, productID);

  const productByID = products?.find(
    (product) => product.id.toString() === productID
  );

  return (
    <>
      {productByID && (
        <div className="border-solid rounded 2-xl border-2 max-w-96 m-4 ">
          <h2 className="p-4 text-center ">{productByID.title}</h2>

          <img
            className="max-w-36 mx-auto"
            src={productByID.image}
            alt={productByID.title}
          />
          <p className="text-base mt-6 mx-auto px-auto">
            {productByID.description.substring(0, 100)}
          </p>
          <p className="text-right p-4">Price : {productByID.price}</p>
          <button>Buy</button>
        </div>
      )}
    </>
  );
};

export default ProductDetails;

import { Fragment } from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  return (
    <Fragment>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          collection={product.collection}
          quantity={product.quantity}
          image={product.image}
          manufacturingCost={product.manufacturingCost}
          price={product.price}
          profitability={product.profitability}
        />
      ))}
    </Fragment>
  );
};

export default ProductList;

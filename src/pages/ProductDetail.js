import { Fragment } from "react";
import { useParams } from "react-router";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "T-Shirt",
    collection: "Summer",
    quantity: "2",
    image:
      "https://docksbeers.com/wp-content/uploads/2019/05/merch-TSHIRT-W-2.jpg",
    manufacturingCost: "5",
    price: "10",
    profitability: "5",
  },
  {
    id: "p2",
    name: "Blouse",
    collection: "Winter",
    quantity: "1",
    image:
      "https://cdn3.tobi.com/product_images/md/1/emerald-xoana-open-back-satin-blouse.jpg",
    manufacturingCost: "5",
    price: "10",
    profitability: "5",
  },
];

const ProductDetail = () => {
  const params = useParams();

  const product = DUMMY_PRODUCTS.find((prod) => prod.id === params.productId);

  if (!product) {
    return <p>No product found!</p>;
  }

  return (
    <Fragment>
      <h1>{product.name}</h1>
      <p>{product.quantity}</p>
    </Fragment>
  );
};

export default ProductDetail;

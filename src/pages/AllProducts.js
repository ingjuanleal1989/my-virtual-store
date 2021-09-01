import { Link } from "react-router-dom";

import ProductList from "../components/products/ProductList";

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

const AllProducts = () => {
  return (
    <div>
      <Link className="btn floating-btn" to="/new-product">
        Add Product
      </Link>
      <ProductList products={DUMMY_PRODUCTS} />
    </div>
  );
};

export default AllProducts;

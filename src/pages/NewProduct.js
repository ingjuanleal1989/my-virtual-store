import { useHistory } from "react-router-dom";
import NewProductForm from "../components/products/NewProductForm";

const NewProduct = () => {
  const history = useHistory();

  const addProductHandler = (productData) => {
    console.log(productData);
    history.push("/products");
  };

  return <NewProductForm onAddProduct={addProductHandler} />;
};

export default NewProduct;

import { useHistory } from "react-router-dom";
import InventoryItemDetails from "../components/inventory/InventoryItemDetails";

const NewProduct = () => {
  const history = useHistory();

  const addProductHandler = (productData) => {
    console.log(productData);
    history.push("/inventory");
  };

  return <InventoryItemDetails onAddProduct={addProductHandler} />;
};

export default NewProduct;

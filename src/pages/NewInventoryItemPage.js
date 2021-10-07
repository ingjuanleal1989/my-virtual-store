import { useHistory } from "react-router-dom";

import AddEditInventoryItem from "../components/inventory/AddEditInventoryItem.js";
import PageContainer from "../components/layout/PageContainer.js";

const NewInventoryItemPage = () => {
  const history = useHistory();

  const addProductHandler = (productData) => {
    console.log(productData);
    history.push("/inventory");
  };

  return (
    <PageContainer>
      <AddEditInventoryItem onAddProduct={addProductHandler} />
    </PageContainer>
  );
};

export default NewInventoryItemPage;

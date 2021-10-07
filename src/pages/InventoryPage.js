import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import InventoryList from "../components/inventory/InventoryList";
import InventoryPageHeader from "../components/inventory/InventoryPageHeader";
import PageContainer from "../components/layout/PageContainer";
import InventoryItemDetailsModal from "../components/inventory/InventoryItemDetailsModal";
import { fetchInventoryData } from "../redux";

const InventoryPage = () => {
  const dispatch = useDispatch();
  const [modalIsShown, setModalIsShown] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const inventoryData = useSelector((state) => state.inventory.inventoryData);
  const isLoading = useSelector((state) => state.inventory.loading);
  const error = useSelector((state) => state.inventory.error);

  useEffect(() => {
    dispatch(fetchInventoryData());
  }, [dispatch]);

  const showModalHandler = (inventoryItem) => {
    setSelectedItem(inventoryItem);
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <Fragment>
      {modalIsShown && (
        <InventoryItemDetailsModal
          onClose={hideModalHandler}
          selectedItem={selectedItem}
        />
      )}
      <PageContainer>
        {isLoading ? (
          <span>Loading...</span>
        ) : error ? (
          <span>{error}</span>
        ) : (
          <Fragment>
            <InventoryPageHeader />
            <InventoryList
              items={inventoryData}
              onShowModal={showModalHandler}
            />
          </Fragment>
        )}
      </PageContainer>
    </Fragment>
  );
};

export default InventoryPage;

import "./inventoryListHeader.css";

const InventoryListHeader = () => {
  return (
    <div className="header">
      <span>Name</span>
      <span>Collection</span>
      <span>Quantity</span>
      <span>Manufacturing Cost</span>
      <span>Price</span>
    </div>
  );
};

export default InventoryListHeader;

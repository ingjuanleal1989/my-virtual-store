import { Link } from "react-router-dom";

import "./inventoryPageHeader.css";

const InventoryPageHeader = () => {
  return (
    <div className="header-container">
      <div className="title-container">
        <span className="title">Inventory</span>
        <span>20000 products</span>
      </div>
      <Link to="/new-inventory-item">Add Product</Link>
    </div>
  );
};

export default InventoryPageHeader;

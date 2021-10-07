import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./inventoryPageHeader.css";

const InventoryPageHeader = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="header-container">
      <div className="title-container">
        <span className="title">Inventory</span>
        <span>{t("inventory.products")}</span>
      </div>
      <Link to="/inventory/new-item">Add Product</Link>
    </div>
  );
};

export default InventoryPageHeader;

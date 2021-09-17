import { useHistory } from "react-router-dom";

import "./inventoryItem.css";

const InventoryItem = (props) => {
  const history = useHistory();

  const toogleItemHandler = () => {
    history.push(`/inventory/${props.id}`);
  };

  return (
    <div className="inventory-item" onClick={toogleItemHandler}>
      <div className="name-container">
        <img src={props.image} alt={props.id} />
        <span>{props.name}</span>
      </div>

      <span>{props.collection}</span>
      <span>{props.quantity}</span>
      <span>{props.manufacturingCost}</span>
      <span>{props.price}</span>
    </div>
  );
};

export default InventoryItem;

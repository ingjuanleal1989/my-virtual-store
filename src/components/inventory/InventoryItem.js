import "./inventoryItem.css";

const InventoryItem = (props) => {
  const onClickHandler = () => {
    props.onClick(props.item);
  };

  return (
    <div className="inventory-item" onClick={onClickHandler}>
      <div className="name-container">
        <img
          className="inventory-item-image"
          src={props.item.image}
          alt={props.item.id}
        />
        <span>{props.item.name}</span>
      </div>
      <span>{props.item.collection}</span>
      <span>{props.item.quantity}</span>
      <span>{props.item.manufacturingCost}</span>
      <span>{props.item.price}</span>
    </div>
  );
};

export default InventoryItem;

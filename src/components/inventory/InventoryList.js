import InventoryItem from "./InventoryItem";
import InventoryListHeader from "./InventoryListHeader";

const inventoryList = (props) => {
  return (
    <div>
      <InventoryListHeader />
      {props.items.map((inventoryItem) => (
        <InventoryItem
          key={inventoryItem.id}
          item={inventoryItem}
          onClick={props.onShowModal}
        />
      ))}
    </div>
  );
};

export default inventoryList;

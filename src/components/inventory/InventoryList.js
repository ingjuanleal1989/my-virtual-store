import InventoryItem from "./InventoryItem";
import InventoryListHeader from "./InventoryListHeader";

const inventoryList = (props) => {
  return (
    <div>
      <InventoryListHeader />
      {props.products.map((product) => (
        <InventoryItem
          key={product.id}
          id={product.id}
          name={product.name}
          collection={product.collection}
          quantity={product.quantity}
          image={product.image}
          manufacturingCost={product.manufacturingCost}
          price={product.price}
          profitability={product.profitability}
        />
      ))}
    </div>
  );
};

export default inventoryList;

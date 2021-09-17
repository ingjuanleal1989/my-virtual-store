import InventoryList from "../components/inventory/InventoryList";
import InventoryPageHeader from "../components/inventory/InventoryPageHeader";
import PageContainer from "../components/layout/PageContainer";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "T-Shirt",
    collection: "Summer",
    quantity: "2",
    image:
      "https://docksbeers.com/wp-content/uploads/2019/05/merch-TSHIRT-W-2.jpg",
    manufacturingCost: "5",
    price: "10",
    profitability: "5",
  },
  {
    id: "p2",
    name: "Blouse",
    collection: "Winter",
    quantity: "1",
    image:
      "https://cdn3.tobi.com/product_images/md/1/emerald-xoana-open-back-satin-blouse.jpg",
    manufacturingCost: "5",
    price: "10",
    profitability: "5",
  },
];

const InventoryPage = () => {
  return (
    <PageContainer>
      <InventoryPageHeader />
      <InventoryList products={DUMMY_PRODUCTS} />
    </PageContainer>
  );
};

export default InventoryPage;

import { Link } from "react-router-dom";

import Card from "../UI/Card";

const ProductItem = (props) => {
  return (
    <Card className="card">
      <span>{props.name}</span>
      <Link className="btn" to={`/products/${props.id}`}>
        Details
      </Link>
    </Card>
  );
};

export default ProductItem;

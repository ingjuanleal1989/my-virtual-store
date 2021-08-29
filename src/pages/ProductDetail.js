import { Fragment } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
    const params = useParams();
    
    return (
        <Fragment>
            <h1>Product Detail Page</h1>
            <p>{params.productId}</p>
        </Fragment>
    );
};

export default ProductDetail;
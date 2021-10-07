import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

const AddEditInventoryItem = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const nameInputRef = useRef();
  const collectionInputRef = useRef();
  const quantityInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const manufacturingCostInputRef = useRef();
  const profitabilityInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCollection = collectionInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredManufacturingCost = manufacturingCostInputRef.current.value;
    const enteredProfitability = profitabilityInputRef.current.value;

    props.onAddProduct({
      name: enteredName,
      collection: enteredCollection,
      quantity: enteredQuantity,
      image: enteredImage,
      price: enteredPrice,
      manufacturingCost: enteredManufacturingCost,
      profitability: enteredProfitability,
    });
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost!"
        }
      />
      <div>
        <form onFocus={formFocusHandler} onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={nameInputRef}></input>
          </div>
          <div>
            <label htmlFor="collection">Collection</label>
            <input type="text" id="collection" ref={collectionInputRef}></input>
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" ref={quantityInputRef}></input>
          </div>
          <div>
            <label htmlFor="image">Image(url)</label>
            <input type="url" id="image" ref={imageInputRef}></input>
          </div>
          <div>
            <label htmlFor="manufacturingCost">Manufacturing Cost</label>
            <input
              type="number"
              id="manufacturingCost"
              ref={manufacturingCostInputRef}
            ></input>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" ref={priceInputRef}></input>
          </div>
          <div>
            <label htmlFor="profitability">Profitability</label>
            <input
              type="number"
              id="profitability"
              ref={profitabilityInputRef}
            ></input>
          </div>
          <div>
            <button onClick={finishEnteringHandler}>Add Product</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddEditInventoryItem;

import { Fragment } from "react";
import { useHistory } from "react-router-dom";

import Modal from "../UI/Modal";

const InventoryItemDetailsModal = (props) => {
  const history = useHistory();

  const editInventoryItemHandler = () => {
    history.push("/inventory/new-item");
  };

  return (
    <Modal onClose={props.onClose}>
      <Fragment>
        <button onClick={props.onClose}>Close</button>
        <button onClick={editInventoryItemHandler}>Edit</button>
        <div>
          <h3>{props.selectedItem.name}</h3>
          <span>{props.selectedItem.quantity}</span>
        </div>
      </Fragment>
    </Modal>
  );
};

export default InventoryItemDetailsModal;

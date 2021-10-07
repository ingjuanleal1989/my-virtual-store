import { onSnapshot, collection } from "firebase/firestore";
import db from "../../firebase";

import {
  FETCH_INVENTORY_DATA_REQUEST,
  FETCH_INVENTORY_DATA_SUCCESS,
  FETCH_INVENTORY_DATA_FAILURE,
} from "./inventoryTypes";

export const fetchInventoryDataRequest = () => {
  return {
    type: FETCH_INVENTORY_DATA_REQUEST,
  };
};

export const fetchInventoryDataSuccess = (inventoryList) => {
  return {
    type: FETCH_INVENTORY_DATA_SUCCESS,
    payload: inventoryList,
  };
};

export const fetchInventoryDataFailure = (error) => {
  return {
    type: FETCH_INVENTORY_DATA_FAILURE,
    payload: error,
  };
};

export const fetchInventoryData = () => {
  return async (dispatch) => {
    dispatch(fetchInventoryDataRequest());
    try {
      onSnapshot(collection(db, "inventory"), (snapshot) => {
        dispatch(
          fetchInventoryDataSuccess(
            snapshot.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          )
        );
      });
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchInventoryDataFailure(errorMsg));
    }
  };
};

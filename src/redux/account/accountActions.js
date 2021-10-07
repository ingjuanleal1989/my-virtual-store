import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";

import {
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
} from "./accountTypes";

export const fetchUserDataRequest = () => {
  return {
    type: FETCH_USER_DATA_REQUEST,
  };
};

export const fetchUserDataSuccess = (userData) => {
  return {
    type: FETCH_USER_DATA_SUCCESS,
    payload: userData,
  };
};

export const fetchUserDataFailure = (error) => {
  return {
    type: FETCH_USER_DATA_FAILURE,
    payload: error,
  };
};

export const fetchUserData = () => {
  return async (dispatch) => {
    dispatch(fetchUserDataRequest());
    try {
      const docSnap = await getDoc(doc(db, "users", "0kS0uk6Fi3S18jovnBJs"));
      const user = docSnap.data();
      dispatch(fetchUserDataSuccess(user));
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchUserDataFailure(errorMsg));
    }
  };
};

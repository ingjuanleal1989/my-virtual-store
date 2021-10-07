import {
  FETCH_INVENTORY_DATA_FAILURE,
  FETCH_INVENTORY_DATA_REQUEST,
  FETCH_INVENTORY_DATA_SUCCESS,
} from "./inventoryTypes";

const initialState = {
  loading: false,
  inventoryData: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVENTORY_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_INVENTORY_DATA_SUCCESS:
      return {
        loading: false,
        inventoryData: action.payload,
        error: "",
      };
    case FETCH_INVENTORY_DATA_FAILURE:
      return {
        loading: false,
        inventoryData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

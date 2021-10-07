import {
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
} from "./accountTypes";

const initialState = {
  loading: false,
  userData: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
        error: "",
      };
    case FETCH_USER_DATA_FAILURE:
      return {
        loading: false,
        userData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

import { combineReducers } from "redux";
import inventoryReducer from "./inventory/inventoryReducer";
import accountReducer from "./account/accountReducer";

const rootReducer = combineReducers({
  inventory: inventoryReducer,
  account: accountReducer,
});

export default rootReducer;

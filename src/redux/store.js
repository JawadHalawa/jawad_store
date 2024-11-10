import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import orderReducer from "./reducers/orderReducer";
import { loadState, saveState } from "./localStorage";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer,
});

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk)
); 

// Save the state to local storage whenever it changes
store.subscribe(() => {
   saveState(store.getState().cart);
 });
export default store;

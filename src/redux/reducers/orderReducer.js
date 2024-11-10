// src/redux/reducers/orderReducer.js
import { CONFIRM_ORDER } from '../actions/orderActions';

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    default:
      return state;
  }
};

export default orderReducer;

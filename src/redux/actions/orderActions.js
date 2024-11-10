// src/redux/actions/orderActions.js
export const CONFIRM_ORDER = 'CONFIRM_ORDER';

export const confirmOrder = (cart) => ({
  type: CONFIRM_ORDER,
  payload: cart,
});

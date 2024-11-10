// src/redux/reducers/authReducer.js
import { SIGN_IN, SIGN_OUT } from '../actions/authActions';

const storedAuth = JSON.parse(localStorage.getItem('auth'));

const initialState = storedAuth || {
  isAuthenticated: false,
  isAdmin: false,
  email: '',
  cart: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { 
        ...state, 
        isAuthenticated: true, 
        isAdmin: action.payload.isAdmin, 
        email: action.payload.email,
        cart: action.payload.cart 
      };
    case SIGN_OUT:
      return { 
        ...state, 
        isAuthenticated: false, 
        isAdmin: false, 
        email: '',
        cart: [] 
      };
    default:
      return state;
  }
};

export default authReducer;

// src/redux/reducers/productReducer.js
const initialState ={
   products: JSON.parse(localStorage.getItem('products')) || []
};

const productReducer = (state = initialState, action) => {
  let updatedProducts;
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {...state, products: [...state.products, ...action.payload], };
    case 'ADD_PRODUCT':
      updatedProducts = [...state.products, action.payload];
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return {
        ...state,
        products: updatedProducts
      };
    case 'REMOVE_PRODUCT':
      updatedProducts = state.products.filter(product => product.id !== action.payload);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return {
        ...state,
        products: updatedProducts
      };
    case 'EDIT_PRODUCT':
      updatedProducts = state.products.map(product =>
        product.id === action.payload.id ? action.payload.updatedProduct : product
      );
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return {
        ...state,
        products: updatedProducts
      };
    default:
      return state;
  }
};

export default productReducer;
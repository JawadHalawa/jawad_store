// src/redux/actions/productActions.js

export const loadProducts = (products) => ({
  type: 'LOAD_PRODUCTS',
  payload: products,
});

export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product
  });

  export const removeProduct = (id) => ({
    type: 'REMOVE_PRODUCT',
    payload: id
  });

  export const editProduct = (id, updatedProduct) => ({
    type: 'EDIT_PRODUCT',
    payload: { id, updatedProduct }
  });
  
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import { loadProducts } from "./redux/actions/productActions";
import productsData from './data/products.json';

// Load initial product data 
store.dispatch(loadProducts(productsData));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

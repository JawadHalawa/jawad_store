// src/redux/localStorage.js
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('cart');
      if (serializedState === null) {
        return undefined;
      }
      return { cart: JSON.parse(serializedState)};
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cart', serializedState);
    } catch (err) {
      // Ignore write errors
    }
  };
  
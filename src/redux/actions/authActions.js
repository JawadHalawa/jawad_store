// src/redux/actions/authActions.js
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const signIn = (isAdmin, email) => {
  localStorage.setItem(
    "auth",
    JSON.stringify({ isAuthenticated: true, isAdmin, email })
  );
  return { type: SIGN_IN, payload: { isAdmin, email } };
};


export const signOut = () => (dispatch, getState) => {
  const { email } = getState().auth;
  localStorage.removeItem("auth");
  localStorage.removeItem(`cart_${email}`);
  dispatch({ type: SIGN_OUT });
  dispatch({ type: "CLEAR_CART" });
};

// src/components/ShoppingCart/ShoppingCart.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/actions/cartActions";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price}</span>
              <span className="item-quantity">x {item.quantity}</span>
            </div>
            <div className="item-actions">
              <button
                className="quantity-button"
                onClick={() => dispatch(incrementQuantity(item.id))}
              >
                +
              </button>
              <button
                className="quantity-button"
                onClick={() => dispatch(decrementQuantity(item.id))}
              >
                -
              </button>
              <button
                className="remove-button"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="checkout-button" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default ShoppingCart;

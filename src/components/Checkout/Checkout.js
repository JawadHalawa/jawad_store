// src/components/Checkout.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { confirmOrder } from '../../redux/actions/orderActions';
import './Checkout.css'; 

const Checkout = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    setPaymentProcessing(true);
    setTimeout(() => {
      dispatch(confirmOrder(cart));
      alert('Payment Successful! Order Confirmed!');
      setPaymentProcessing(false);
    }, 2000);
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <div className="payment-methods">
        <h3>Select Payment Method</h3>
        <label>
          <input 
            type="radio" 
            value="Credit Card" 
            checked={paymentMethod === 'Credit Card'}
            onChange={(e) => setPaymentMethod(e.target.value)} 
          />
          Credit Card
        </label>
        <label>
          <input 
            type="radio" 
            value="PayPal" 
            checked={paymentMethod === 'PayPal'}
            onChange={(e) => setPaymentMethod(e.target.value)} 
          />
          PayPal
        </label>
        <label>
          <input 
            type="radio" 
            value="Bank Transfer" 
            checked={paymentMethod === 'Bank Transfer'}
            onChange={(e) => setPaymentMethod(e.target.value)} 
          />
          Bank Transfer
        </label>
      </div>
      <button className="checkout-button" onClick={handleCheckout} disabled={paymentProcessing}>
        {paymentProcessing ? 'Processing...' : 'Confirm Order'}
      </button>
    </div>
  );
};

export default Checkout;

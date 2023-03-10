import React from 'react';
import '../styles/cart.css';

function Cart({ toggleCart, showCart, cart }) {
  const totalCost = 100.1;
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  // Add a timeout after placing order to announce the order placement, and edit the buttons content accordingly.
  return (
    <>
      <div
        style={{ display: showCart ? 'block' : 'none' }}
        className="cart-overlay"
      ></div>
      <div className={`cart-window ${showCart && 'active'}`}>
        <button className="back" onClick={toggleCart}></button>
        <p className="title">Shopping Cart</p>
        {cart.length > 0 ? (
          <div className="cart-not-empty">
            <div className="items"></div>
            <p>{`Total: `}</p>
            <p>{`Taxes:`}</p>
            <p>{`Subtotal:`}</p>
            <button className="checkout">Checkout</button>
          </div>
        ) : (
          <p className="cart-empty">You have not items yet.</p>
        )}
      </div>
      <div className="cart-window-cover"></div>
    </>
  );
}

export default Cart;

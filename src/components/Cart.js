import React, { useState } from 'react';
import { Context } from '../Context';
import { useContext } from 'react';
import '../styles/cart.css';

function Cart({ toggleCart, showCart }) {
  const { cart, removeFromCart } = useContext(Context);
  const [status, setStatus] = useState(false);

  const test = () => console.log(cart);

  const totalCost = 100.1;
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const checkout = () => {
    setStatus(true);
    setTimeout(() => {
      removeFromCart();
      setStatus(false);
    }, 3000);
  };
  return (
    <>
      <div
        style={{ display: showCart ? 'block' : 'none' }}
        className="cart-overlay"
      ></div>
      <div className={`cart-window ${showCart && 'active'}`}>
        <button className="back" onClick={toggleCart}></button>
        <p onClick={test} className="title">
          Shopping Cart
        </p>
        {cart.length > 0 ? (
          <div className="cart-not-empty">
            <div className="items"></div>
            <p>{`Total: `}</p>
            <p>{`Taxes:`}</p>
            <p>{`Subtotal:`}</p>
            <button onClick={checkout} className="checkout">
              {!status ? 'Checkout' : 'Submitting...'}
            </button>
          </div>
        ) : (
          <p className="cart-empty">You have no items yet.</p>
        )}
      </div>
      <div className="cart-window-cover"></div>
    </>
  );
}

export default Cart;

import React, { useState } from 'react';
import { Context } from '../Context';
import { useContext } from 'react';
import CartItem from './CartItem';
import '../styles/cart.css';

function Cart({ toggleCart, showCart }) {
  const { cart, addToCart, removeFromCart } = useContext(Context);
  const [status, setStatus] = useState(false);

  const test = () => console.log(cart);

  const totalCost = 100.1;
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const items = cart.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  ));

  const checkout = () => {
    setStatus(true);
    setTimeout(() => {
      removeFromCart('all');
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
            <div className="items">{items}</div>
            <p className="total">{`Total: `}</p>
            <p className="taxes">{`Taxes:`}</p>
            <p className="subtotal">{`Subtotal:`}</p>
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

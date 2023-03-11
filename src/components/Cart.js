import React, { useState, useEffect } from 'react';
import { Context } from '../Context';
import { useContext } from 'react';
import CartItem from './CartItem';
import '../styles/cart.css';

function Cart({ toggleCart, showCart }) {
  const { cart, removeFromCart } = useContext(Context);
  const [orderStatus, setStatus] = useState(false);
  const [cartMessage, setMessage] = useState('You have no items yet.');
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const items = cart.map((item) => <CartItem key={item.id} item={item} />);

  const test = () => console.log(calculateTotal());
  const totalCost = 100.1;
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    const round = (x) => (Math.round(x * 100) / 100).toFixed(2);
    let amount = 0;
    cart.forEach((element) => {
      if (element.quantity > 1) amount += element.price * element.quantity;
      else amount += element.price;
    });
    amount = +round(amount);
    setTotal(amount);
    setTaxes(round(amount / 10));
    setSubTotal(
      round(amount + amount / 10).toLocaleString('en-EUR', {
        style: 'currency',
        currency: 'EUR',
      })
    );
  };

  const checkout = () => {
    setStatus(true);
    setTimeout(() => {
      removeFromCart('all');
      setStatus(false);
      setMessage('Order placed successfully!');
    }, 3000);
  };
  const closeCloseCart = () => {
    if (cartMessage === 'Order placed successfully!')
      setTimeout(() => setMessage('You have no items yet.'), 1100);
    toggleCart();
  };

  return (
    <>
      <div
        style={{ display: showCart ? 'block' : 'none' }}
        className="cart-overlay"
      ></div>
      <div className={`cart-window ${showCart && 'active'}`}>
        <button className="back" onClick={closeCloseCart}></button>
        <p onClick={test} className="title">
          Shopping Cart
        </p>
        {cart.length > 0 ? (
          <div className="cart-not-empty">
            <div className="items">{items}</div>
            <p className="total">{`Total: ${total}€`}</p>
            <p className="taxes">{`Taxes: ${taxes}€ (10%)`}</p>
            <p className="subtotal">{`Subtotal: ${subTotal}€`}</p>
            <button onClick={checkout} className="checkout">
              {!orderStatus ? 'Checkout' : 'Submitting...'}
            </button>
          </div>
        ) : (
          <p className="cart-empty">{cartMessage}</p>
        )}
      </div>
      <div className="cart-window-cover"></div>
    </>
  );
}

export default Cart;

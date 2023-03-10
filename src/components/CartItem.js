import React from 'react';
import { Context } from '../Context';
import { useContext } from 'react';
import '../styles/cart-item.css';

function CartItem({ item: { name, category, price, quantity, source, id } }) {
  const { setCartItemValue, addToCart, removeFromCart } = useContext(Context);
  const changeQty = (e) => {
    const value = e.target.value;
    value > quantity ? addToCart(id, value) : removeFromCart(id, value);
  };

  return (
    <div className="cart-item">
      <img src={source} alt="tea in a cup"></img>
      <div className="details">
        <p>{`${name} - ${category} tea leaves (100gr)`}</p>
        <p>{`${price} €`}</p>
        <div className="quantity-buttons">
          <button onClick={() => removeFromCart(id)}></button>
          <input
            onChange={(e) => setCartItemValue(id, e.target.value)}
            value={quantity || ''}
          ></input>
          <button onClick={() => addToCart(id)}></button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

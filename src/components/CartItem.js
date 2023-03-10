import React from 'react';
import '../styles/cart-item.css';

function CartItem({
  addToCart,
  removeFromCart,
  item: { name, category, price, quantity, source, id },
}) {
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
          <input onChange={changeQty} value={quantity || ''}></input>
          <button onClick={() => addToCart(id)}></button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

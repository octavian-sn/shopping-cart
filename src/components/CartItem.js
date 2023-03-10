import React from 'react';

function CartItem({
  addToCart,
  removeFromCart,
  item: { name, price, quantity, source },
}) {
  return <div className="cart-item"></div>;
}

export default CartItem;

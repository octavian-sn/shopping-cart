import React from 'react';

function Cart() {
  const totalCost = 100.1;
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  // Add a timeout after placing order to announce the order placement, and edit the buttons content accordingly.
  return (
    <div className="cart-overlay">
      <div className="cart-window"></div>
    </div>
  );
}

export default Cart;

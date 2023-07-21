import React from 'react';
import './ShoppingCart.css';

function ShoppingCart({ cartItems, totalAmount, onPayClick }) {
  const handlePayClick = () => {
    const selectedURLs = cartItems.map((item) => item.imageURL);
    onPayClick(selectedURLs);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.imageURL} alt={`flower ${index + 1}`} />
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <div className="total-amount">Total: ${totalAmount}</div>
      <button className="pay-button" onClick={handlePayClick}>
        Pay
      </button>
    </div>
  );
}

export default ShoppingCart;

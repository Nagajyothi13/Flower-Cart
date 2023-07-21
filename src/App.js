import React, { useState } from 'react';
import './App.css';
import Picture from './components/Picture';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const initialPictures = [
    { imageURL: '/Pictures/flower1.jpg', price: 10 },
    { imageURL: '/Pictures/flower2.jpg', price: 15 },
    { imageURL: '/Pictures/flower3.jpg', price: 5 },
    { imageURL: '/Pictures/4.jpg', price: 10 },
    { imageURL: '/Pictures/5.jpg', price: 15 },
    { imageURL: '/Pictures/6.jpg', price: 5 },
    { imageURL: '/Pictures/7.jpg', price: 10 },
    { imageURL: '/Pictures/8.jpg', price: 15 },
    { imageURL: '/Pictures/9.jpg', price: 5 },
    { imageURL: '/Pictures/10.jpg', price: 10 },
    { imageURL: '/Pictures/11.jpg', price: 15 },
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [pictures, setPictures] = useState(initialPictures);

  const handleBuyClick = (imageURL, price) => {
    setCartItems((prevItems) => [...prevItems, { imageURL, price }]);
    setTotalAmount((prevTotal) => prevTotal + price);
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, imageURL]);
  };

  const handlePayClick = () => {
    setCartItems([]);
    setTotalAmount(0);
    setSelectedItems([]);
    setPictures((prevPictures) =>
      prevPictures.filter((picture) => !selectedItems.includes(picture.imageURL))
    );
  };

  return (
    <>
      <div>
        <ShoppingCart cartItems={cartItems} totalAmount={totalAmount} onPayClick={handlePayClick} />
      </div>
      <div>
        {pictures.map((picture) => (
          <Picture
            key={picture.imageURL}
            imageURL={picture.imageURL}
            price={picture.price}
            onBuyClick={handleBuyClick}
            isSelected={selectedItems.includes(picture.imageURL)}
          />
        ))}
      </div>
    </>
  );
}

export default App;

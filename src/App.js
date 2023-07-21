import React, { useState } from 'react';
import './App.css';
import Picture from './components/Picture';
import ShoppingCart from './components/ShoppingCart';
import flower1 from './Pictures/flower1.jpg';
import flower2 from './Pictures/7.jpg';
import flower3 from './Pictures/flower3.jpg';
import flower4 from './Pictures/4.jpg';
import flower5 from './Pictures/5.jpg';
import flower6 from './Pictures/6.jpg';
import flower7 from './Pictures/flower2.jpg';
import flower8 from './Pictures/8.jpg';
import flower9 from './Pictures/9.jpg';
import flower10 from './Pictures/10.jpg';
import flower11 from './Pictures/11.jpg';

function App() {
  const initialPictures = [
    { imageURL: flower1, price: 10 },
    { imageURL: flower2, price: 15 },
    { imageURL: flower3, price: 5 },
    { imageURL: flower4, price: 10 },
    { imageURL: flower5, price: 15 },
    { imageURL: flower6, price: 5 },
    { imageURL: flower7, price: 10 },
    { imageURL: flower8, price: 15 },
    { imageURL: flower9, price: 5 },
    { imageURL: flower10, price: 10 },
    { imageURL: flower11, price: 15 },
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

import React, { useState } from 'react';
import './Picture.css';

function Picture(props) {
  const { imageURL, price, onBuyClick } = props;
  const [isBig, setIsBig] = useState(false);
  const [isSelected, setIsSelected] = useState(false); 
  
  const handleImageClick = () => {
    setIsBig(!isBig);
  };

  const handleBuyClick = () => {
    setIsSelected(true);
    onBuyClick(imageURL, price);
  };

  return (
    <div className={`picture-container ${isBig ? 'big' : ''} ${isSelected ? 'selected' : ''}`} onClick={handleImageClick}>
      <img src={imageURL} alt="flower1" className="picture-image" />
      <div className={`picture-content ${isBig ? 'show' : ''}`}>
        <div className="picture-price">${price}</div>
        <button className="buy-button" onClick={handleBuyClick}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default Picture;

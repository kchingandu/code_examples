import React from 'react';

const ProductTile = ({productInfo, onItemSelect, buttonText}) => {
  const {image, detail, name, price} = productInfo;

  return (
    <li className='product-tile'>
      <img src={image} alt={name}/>
      <div className='product-details'>
        <h3>{name}</h3>

        <span>{detail}</span>

        <span>{`$${price}`}</span>

        <button
          onClick={() => {
            onItemSelect(productInfo.id);
          }}>
          {buttonText}
        </button>
      </div>
    </li>
  )
};

export default ProductTile
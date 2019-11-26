import React from 'react';
import ProductTile from '../productTile/ProductTile';

const ProductList = ({products, onItemSelect, buttonText}) => (
  <div>
    <ul>
      {products.map((productInfo, index) =>
        <ProductTile
          key={productInfo.id + index}
          productInfo={productInfo}
          buttonText={buttonText}
          onItemSelect={onItemSelect}
        />)
      }
    </ul>
  </div>
);

export default ProductList;


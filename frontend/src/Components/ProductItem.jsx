import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link onClick={() => scrollTo(0, 0)} className="product-item" to={`/product/${id}`}>
      <div className="product-image-wrapper">
        <img className="product-image" src={image[0]} alt={name} />
      </div>
      <p className="product-name">{name}</p>
      <p className="product-price">{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;

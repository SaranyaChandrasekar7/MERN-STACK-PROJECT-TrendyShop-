import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';
import './Product.css';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="product-container">
      <div className="product-main">
        <div className="product-images-section">
          <div className="product-thumbnails">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="thumbnail"
                alt=""
              />
            ))}
          </div>
          <div className="product-main-image">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="product-info">
          <h1>{productData.name}</h1>
          <div className="stars">
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <p className="product-price">{currency}{productData.price}</p>
          <p className="product-description">{productData.description}</p>
          <div className="product-size">
            <p>Select Size</p>
            <div className="size-buttons">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`size-button ${item === size ? 'selected' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className="add-to-cart-btn">
            ADD TO CART
          </button>
          <hr />
          <div className="product-policies">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="product-details">
        <div className="tabs">
          <b className="tab">Description</b>
          <p className="tab">Reviews (122)</p>
        </div>
        <div className="tab-content">
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet...
          </p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="hidden"></div>
  );
};

export default Product;


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal';
import './Cart.css';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="cart-container">
      <div className="cart-title">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);

          return (
            <div key={index} className="cart-item-row">
              <div className="cart-item-info">
                <img className="cart-item-img" src={productData.image[0]} alt="" />
                <div>
                  <p className="cart-item-name">{productData.name}</p>
                  <div className="cart-item-details">
                    <p>{currency}{productData.price}</p>
                    <p className="cart-item-size">{item.size}</p>
                  </div>
                </div>
              </div>

              <input
                className="cart-item-quantity"
                type="number"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === '' || e.target.value === '0'
                    ? null
                    : updateQuantity(item._id, item.size, Number(e.target.value))
                }
              />
              <img
                className="cart-delete-icon"
                src={assets.bin_icon}
                alt=""
                onClick={() => updateQuantity(item._id, item.size, 0)}
              />
            </div>
          );
        })}
      </div>

      <div className="cart-summary">
        <div className="cart-summary-box">
          <CartTotal />
          <div className="cart-checkout-btn-wrapper">
            <button className="cart-checkout-btn" onClick={() => navigate('/place-order')}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

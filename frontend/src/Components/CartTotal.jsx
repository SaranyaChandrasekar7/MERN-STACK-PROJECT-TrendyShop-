
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import './CartTotal.css';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="cart-total">
      <div className="cart-title">
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className="cart-details">
        <div className="cart-row">
          <p>Subtotal</p>
          <p>{currency} {subtotal}.00</p>
        </div>
        <hr />
        <div className="cart-row">
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>
        <hr />
        <div className="cart-row total-row">
          <b>Total</b>
          <b>{currency} {total}.00</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;

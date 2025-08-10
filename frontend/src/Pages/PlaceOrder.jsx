
import React, { useContext, useState } from 'react';
import Title from '../Components/Title';
import CartTotal from '../Components/CartTotal';
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      };

      // Only COD is handled here
      const response = await axios.post(
        backendUrl + '/api/order/place',
        orderData,
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        navigate('/orders');
      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="placeorder-form">
      {/* Left Side */}
      <div className="placeorder-left">
        <div className="placeorder-title">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className="input-group">
          <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} className="input-field" type="text" placeholder="First name" />
          <input required onChange={onChangeHandler} name="lastName" value={formData.lastName} className="input-field" type="text" placeholder="Last name" />
        </div>
        <input required onChange={onChangeHandler} name="email" value={formData.email} className="input-field" type="email" placeholder="Email address" />
        <input required onChange={onChangeHandler} name="street" value={formData.street} className="input-field" type="text" placeholder="Street" />
        <div className="input-group">
          <input required onChange={onChangeHandler} name="city" value={formData.city} className="input-field" type="text" placeholder="City" />
          <input onChange={onChangeHandler} name="state" value={formData.state} className="input-field" type="text" placeholder="State" />
        </div>
        <div className="input-group">
          <input required onChange={onChangeHandler} name="zipcode" value={formData.zipcode} className="input-field" type="number" placeholder="Zipcode" />
          <input required onChange={onChangeHandler} name="country" value={formData.country} className="input-field" type="text" placeholder="Country" />
        </div>
        <input required onChange={onChangeHandler} name="phone" value={formData.phone} className="input-field" type="number" placeholder="Phone" />
      </div>

      {/* Right Side */}
      <div className="placeorder-right">
        <div className="cart-total">
          <CartTotal />
        </div>

        <div className="payment-section">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className="payment-options">
            <div className="payment-option selected">
              <p className="payment-dot selected"></p>
              <p className="cod-label">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="submit-wrapper">
            <button type="submit" className="submit-button">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

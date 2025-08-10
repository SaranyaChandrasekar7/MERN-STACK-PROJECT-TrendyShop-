import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import axios from 'axios';
import './Orders.css';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error('Failed to load orders:', error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="orders-container">
      <div className="orders-title">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div key={index} className="order-item">
            <div className="order-left">
              <img src={item.image[0]} alt="" className="order-img" />
              <div className="order-details">
                <p className="order-name">{item.name}</p>
                <div className="order-info">
                  <p>{currency}{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="order-meta">Date: <span>{new Date(item.date).toDateString()}</span></p>
                <p className="order-meta">Payment: <span>{item.paymentMethod}</span></p>
              </div>
            </div>
            <div className="order-right">
              <div className="order-status">
                <span className="status-dot"></span>
                <p>{item.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

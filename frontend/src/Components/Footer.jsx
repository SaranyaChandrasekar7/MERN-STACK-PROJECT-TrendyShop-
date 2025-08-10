import React from "react";
import "./Footer.css"; // ✅ Import CSS


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
        
          <h1 className="logo">TrendyShop</h1>
          <p className="footer-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim iste quia corporis, quis veniam dolorem inventore explicabo accusantium esse atque iure et nemo dicta maxime consectetur repellat culpa rerum.
          </p>
        </div>

        <div className="footer-section">
          <p className="footer-heading">COMPANY</p>
          <ul className="footer-list">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <p className="footer-heading">GET IN TOUCH</p>
          <ul className="footer-list">
            <li>82628389173</li>
            <li>contact@trendyforyou.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>Copyright 2025 © Trendy.com - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;


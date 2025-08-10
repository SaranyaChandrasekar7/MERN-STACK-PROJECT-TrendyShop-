import React from "react";
import { assets } from "../assets/assets"; // make sure this path is correct
import "./OurPolicy.css"; // normal CSS file

function OurPolicy() {
  return (
    <div className="our-policy-container">
      <div className="policy-item">
        <img src={assets.Exchange_icon} className="policy-icon" alt="" />
        <p className="policy-title">Easy Exchange Policy</p>
        <p className="policy-desc">We offer hassle-free exchange policy</p>
      </div>

      <div className="policy-item">
        <img src={assets.Quality_icon} className="policy-icon" alt="" />
        <p className="policy-title">7 Days Return Policy</p>
        <p className="policy-desc">We Provide 7 Days Free Return Policy</p>
      </div>

      <div className="policy-item">
        <img src={assets.Support_icon} className="policy-icon" alt="" />
        <p className="policy-title">Best Customer Support</p>
        <p className="policy-desc">We Provide 24/7 Customer Support</p>
      </div>
    </div>
  );
}

export default OurPolicy;

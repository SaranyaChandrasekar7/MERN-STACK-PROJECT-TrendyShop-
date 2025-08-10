import React from 'react';
import { assets } from '../assets/assets'; // adjust path as needed
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      {/* Left side */}
      <div className="hero-left">
        <div className="hero-content">
          <div className="hero-top-row">
            <p className="line"></p>
            <p className="bestseller-text">BESTSELLERS</p>
          </div>
          <h1 className="hero-title">Latest Arrivals</h1>
          <div className="hero-shop-row">
            <p className="shop-now">Shop Now</p>
            <p className="line-short"></p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <img className="hero-img" src={assets.hero_icon} alt="hero" />
    </div>
  );
}

export default Hero;

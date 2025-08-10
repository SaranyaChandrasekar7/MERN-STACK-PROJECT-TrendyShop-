import React from 'react';
import './NewsletterBox.css';

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="newsletter-box">
      <p className="newsletter-title">Subscribe now & get 20% off</p>
      <p className="newsletter-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <form onSubmit={onSubmitHandler} className="newsletter-form">
        <input
          className="newsletter-input"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit" className="newsletter-button">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;



import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import './Navbar.css';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // 🔹 Profile menu toggle
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    setShowDropdown(false);
    navigate('/login');
  };

  return (
    <div className="navbar">
      
      <Link to="/"><a  className="logo"><h1>TrendyShop</h1></a></Link>

      <ul className="navbar-links">
        <NavLink to="/" className="navbar-link">HOME</NavLink>
        <NavLink to="/collection" className="navbar-link">COLLECTION</NavLink>
        <NavLink to="/about" className="navbar-link">ABOUT</NavLink>
        <NavLink to="/contact" className="navbar-link">CONTACT</NavLink>
      </ul>

      <div className="navbar-icons">

        {/* 🔍 Search icon */}
        <img
          onClick={() => {
            setShowSearch(true);
            navigate('/collection');
          }}
          src={assets.search_icon}
          className="icon"
          alt="Search"
        />

        {/* 👤 Profile icon */}
        <div className="profile-wrapper">
          <img
            onClick={() => {
              if (!token) {
                navigate('/login'); // 🔓 Not logged in → go to login
              } else {
                setShowDropdown(!showDropdown); // ✅ Toggle dropdown if logged in
              }
            }}
            className="icon"
            src={assets.profile_icon}
            alt="Profile"
          />

          {/* ✅ Show dropdown only when logged in and dropdown toggled */}
          {token && showDropdown && (
            <div className="profile-dropdown">
              <p className="dropdown-item">My Profile</p>
              <p onClick={() => {
                navigate('/orders');
                setShowDropdown(false);
              }} className="dropdown-item">Orders</p>
              <p onClick={logout} className="dropdown-item">Logout</p>
            </div>
          )}
        </div>

        {/* 🛒 Cart icon */}
        <Link to="/cart" className="cart-wrapper">
          <img src={assets.cart_icon} className="icon" alt="Cart" />
          <p className="cart-count">{getCartCount()}</p>
        </Link>

        {/* 📱 Menu icon (for mobile sidebar) */}
        <img
          onClick={() => setVisible(true)}
          src={assets.Menu_icon}
          className="icon menu-icon"
          alt="Menu"
        />
      </div>

      {/* 📱 Sidebar menu for mobile */}
      <div className={`sidebar ${visible ? 'sidebar-visible' : ''}`}>
        <div className="sidebar-content">
          <div onClick={() => setVisible(false)} className="sidebar-back">
            <img className="dropdown-icon" src={assets.Backright_icon} alt="Back" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to="/" className="sidebar-link">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} to="/collection" className="sidebar-link">COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} to="/about" className="sidebar-link">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} to="/contact" className="sidebar-link">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

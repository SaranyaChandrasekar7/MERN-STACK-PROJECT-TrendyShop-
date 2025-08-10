import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";
import "./SearchBar.css"; // Import the normal CSS

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="searchbar-container">
      <div className="searchbar-box">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="searchbar-input"
          type="text"
          placeholder="Search"
        />
        <img className="searchbar-icon" src={assets.search_icon} alt="Search" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="searchbar-close"
        src={assets.wrong_icon}
        alt="Close"
      />
    </div>
  ) : null;
}

export default SearchBar;

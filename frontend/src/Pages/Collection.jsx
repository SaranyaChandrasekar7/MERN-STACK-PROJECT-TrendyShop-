import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';
import './Collection.css';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let sorted = [...filterProducts];

    switch (sortType) {
      case 'low-high':
        setFilterProducts(sorted.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(sorted.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="collection-container">
      {/* Filter Panel */}
      <div className="filter-panel">
        <p onClick={() => setShowFilter(!showFilter)} className="filter-toggle">
          FILTERS
          <img
            className={`dropdown-icon ${showFilter ? 'rotate' : ''}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        <div className={`filter-box ${showFilter ? '' : 'hide-on-mobile'}`}>
          <p className="filter-title">CATEGORIES</p>
          <div className="filter-options">
            <label><input type="checkbox" value="Men" onChange={toggleCategory} /> Men</label>
            <label><input type="checkbox" value="Women" onChange={toggleCategory} /> Women</label>
            <label><input type="checkbox" value="Kids" onChange={toggleCategory} /> Kids</label>
          </div>
        </div>

        <div className={`filter-box ${showFilter ? '' : 'hide-on-mobile'}`}>
          <p className="filter-title">TYPE</p>
          <div className="filter-options">
            <label><input type="checkbox" value="Topwear" onChange={toggleSubCategory} /> Topwear</label>
            <label><input type="checkbox" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear</label>
            <label><input type="checkbox" value="Winterwear" onChange={toggleSubCategory} /> Winterwear</label>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="product-panel">
        <div className="collection-header">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select onChange={(e) => setSortType(e.target.value)} className="sort-dropdown">
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="product-grid">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

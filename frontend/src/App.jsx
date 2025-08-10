import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Cart from "./Pages/Cart";
import PlaceOrder from "./Pages/PlaceOrder";

import './Pages.css';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from "./Pages/Product";
import Orders from "./Pages/Orders";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Verify from "./Pages/verify";

function App() {
  return (
    <div className="custom-padding">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/About" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/verify" element={<Verify/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

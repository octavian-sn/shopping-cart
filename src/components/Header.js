import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tea/logo.png';
import '../styles/header.css';
import { Context } from '../Context';
import { useContext, useEffect, useState } from 'react';

function Header({ toggleCart }) {
  const { cart } = useContext(Context);
  const [cartQuantity, setCartQuantity] = useState(0);
  useEffect(() => {
    let number = 0;
    cart.forEach((element) => {
      if (element.quantity) {
        number += element.quantity;
      } else {
        number += 1;
      }
    });
    setCartQuantity(number);
  }, [cart]);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="app-logo" alt="logo"></img>
      </Link>
      <div className="search-bar">
        <div className="upper margin"></div>
        <input className="custom-window--body" placeholder="Search"></input>
        <div className="lower margin"></div>
      </div>
      <Link to="/">
        <button className="home header-button">Home</button>
      </Link>
      <Link to="/tea">
        <button className="tea header-button">Tea</button>
      </Link>
      <Link to="/contact">
        <button className="contact header-button">Contact</button>
      </Link>
      <div onClick={toggleCart} className="cart">
        {cartQuantity}
      </div>
    </header>
  );
}

export default Header;

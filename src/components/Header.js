import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tea/logo.png';
import '../styles/header.css';

function Header(props) {
  return (
    <header className="header">
      <img src={logo} className="app-logo" alt="logo"></img>
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
      <div className="cart">31</div>
    </header>
  );
}

export default Header;

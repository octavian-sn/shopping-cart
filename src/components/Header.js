import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tea/logo.png';
import '../styles/header.css';
import { Context } from '../Context';
import { useContext, useEffect, useState } from 'react';
import PopUp from './PopUp';
import usePopUp from '../customHooks/usePopUp';

function Header({ toggleCart }) {
  const { cart, items } = useContext(Context);
  const { popUp, closePopUp, openPopUp } = usePopUp();
  const [searchItem, setSearchItem] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchWords = (e) => setSearchItem(e.target.value);
  useEffect(() => {
    const results = items.filter((item) => item.category === searchItem);
    results.length > 0
      ? setSearchResults(
          results.map((result) => (
            <p onClick={() => openPopUp(result)} key={result.id}>
              {result.name}
            </p>
          ))
        )
      : setSearchResults('Try searching for "green" or "black".');
  }, [searchItem]);

  const [cartQuantity, setCartQuantity] = useState(0);
  useEffect(() => {
    let number = 0;
    if (cart) {
      cart.forEach((element) => {
        if (element.quantity) {
          number += element.quantity;
        } else {
          number += 1;
        }
      });
    }
    setCartQuantity(number);
  }, [cart]);

  useEffect(() => {
    const header = document.querySelector('.header');
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('is-pinned', e.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(header);
  }, []);

  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} className="app-logo" alt="logo"></img>
        </Link>
        <div className="search-bar">
          <div className="upper margin"></div>
          <input
            className="custom-window--body"
            placeholder="Search"
            onBlur={() => setTimeout(() => setSearchItem(''), 100)}
            onChange={searchWords}
            value={searchItem || ''}
          ></input>
          <div className="lower margin"></div>
          {searchItem.length > 0 && (
            <div className="search-results">{searchResults}</div>
          )}
        </div>
        <Link to="/">
          <button className="home header-button">Home</button>
        </Link>
        <Link to="/tea">
          <button className="tea header-button">Tea</button>
        </Link>
        <Link to="/about">
          <button className="about header-button">About</button>
        </Link>
        <div onClick={toggleCart} className="cart">
          {cartQuantity}
        </div>
      </header>
      {popUp && <PopUp closePopUp={closePopUp} popUp={popUp} />}
    </>
  );
}

export default Header;

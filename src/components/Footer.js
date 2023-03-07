import React from 'react';
import logo from '../assets/tea/logo.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import '../styles/footer.css';

function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="logo"></img>
        <div className="social-media">
          <img src={twitter} alt="twitter logo"></img>
          <img src={instagram} alt="instagram logo"></img>
          <img src={facebook} alt="facebook logo"></img>
        </div>
      </div>
      <div className="column one">
        <p className="title">EterniTea.com</p>
        <ul>
          <li>About Us</li>
          <li>Terms & Conditions</li>
          <li>Confidentiality Policy</li>
          <li>Cookies</li>
          <li>Solving Disputes</li>
        </ul>
      </div>
      <div className="column two">
        <p className="title">Orders & delivery</p>
        <ul>
          <li>My account</li>
          <li>Order delivery</li>
          <li>Refund and returns</li>
          <li>Payment methods</li>
        </ul>
      </div>
      <div className="column three">
        <p className="title">Customer Support</p>
        <ul>
          <li>Product return form</li>
          <li>Contact</li>
          <li>Delivery services general information</li>
          <li>Consumer rights and complaints</li>
        </ul>
      </div>
      <div className="credits"></div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import FancyWindow from '../components/FancyWindow';
import '../styles/home-page.css';

function Home() {
  return (
    <>
      <FancyWindow size="big">
        <div className="home-page">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; "Tea is a divine herb. There are ample
            profits to be had in its cultivation. It purifies the spirit of the
            one drinking it; and it is esteemed by the nobles and public alike.
            Truly tea is a necessity in the daily life of man and an asset to
            the commonwealth.”
          </p>
          <p>- Xu Guang Qi</p>
          <Link to="/tea">
            {/* Used class from header buttons for styling */}
            <button className="header-button">Continue</button>
          </Link>
        </div>
      </FancyWindow>
    </>
  );
}

export default Home;

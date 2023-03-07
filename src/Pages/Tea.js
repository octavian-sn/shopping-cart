import React from 'react';
import FancyWindow from '../components/FancyWindow';
import { Context } from '../Context';
import { useContext } from 'react';
import '../styles/tea-page.css';

function Tea() {
  const { data } = useContext(Context);

  return (
    <div>
      <FancyWindow size="big">
        <div className="tea-page">
          <div className="header">
            <p>Tea</p>
            <button>Name</button>
            <button>Price</button>
          </div>
          <div className="sider">
            <button>Favorites</button>
            <button>Black</button>
            <button>Dark</button>
            <button>Green</button>
            <button>Oolong</button>
            <button>White</button>
            <button>Yellow</button>
          </div>
          <div className="cards"></div>
        </div>
      </FancyWindow>
    </div>
  );
}

export default Tea;

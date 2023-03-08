import React from 'react';
import FancyWindow from '../components/FancyWindow';
import { Context } from '../Context';
import { useContext } from 'react';
import TeaCard from '../components/TeaCard';
import '../styles/tea-page.css';

function Tea() {
  const { data } = useContext(Context);

  return (
    <div>
      <FancyWindow size="big">
        <div className="tea-page">
          <div className="header">
            <p>Tea</p>
            <button className="sort">Name</button>
            <button className="sort">Price</button>
          </div>
          <div className="sider">
            <button className="sort">Favorites</button>
            <button className="sort">Black</button>
            <button className="sort">Dark</button>
            <button className="sort">Green</button>
            <button className="sort">Oolong</button>
            <button className="sort">White</button>
            <button className="sort">Yellow</button>
          </div>
          <div className="cards">
            {data.map((tea) => (
              <TeaCard tea={tea} />
            ))}
          </div>
        </div>
      </FancyWindow>
    </div>
  );
}

export default Tea;

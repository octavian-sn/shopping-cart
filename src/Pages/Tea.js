import React, { useState } from 'react';
import FancyWindow from '../components/FancyWindow';
import PopUp from '../components/PopUp';
import { Context } from '../Context';
import { useContext } from 'react';
import TeaCard from '../components/TeaCard';
import up from '../assets/up-arrow.png';
import down from '../assets/down-arrow.png';
import '../styles/tea-page.css';

function Tea() {
  const {
    items,
    showFavorites,
    toggleCategory,
    sort,
    sorting: { criteria, name, price },
    filters: { favorite, black, dark, green, oolong, white, yellow },
  } = useContext(Context);
  const [popUp, setPopUp] = useState(null);
  const closePopUp = () => setPopUp(null);
  const getPopUpInformation = (information) => {
    setPopUp(information);
  };

  const nameSortingArrow = () => {
    if (criteria === 'name' && name === 'ascending') return up;
    if (criteria === 'name' && name === 'descending') return down;
  };
  const priceSortingArrow = () => {
    if (criteria === 'price' && price === 'ascending') return up;
    if (criteria === 'price' && price === 'descending') return down;
  };

  return (
    <div>
      <FancyWindow size="big">
        <div className="tea-page">
          {/* Sorting buttons */}
          <div className="header">
            <p>Tea</p>
            <button
              style={{
                fontWeight: criteria === 'name' && 900,
                backgroundImage: `url(${nameSortingArrow()})`,
              }}
              onClick={() => sort('name')}
              className="sort"
            >
              Name
            </button>
            <button
              style={{
                fontWeight: criteria === 'price' && 900,
                backgroundImage: `url(${priceSortingArrow()})`,
              }}
              onClick={sort}
              className="sort"
            >
              Price
            </button>
          </div>
          {/* Tea categories buttons and favorites */}
          <div className="sider">
            <button
              style={{ fontWeight: favorite && 900 }}
              onClick={showFavorites}
              className="sort"
            >
              Favorites
            </button>
            <button
              style={{ fontWeight: black && 900 }}
              onClick={() => toggleCategory('black')}
              className="sort"
            >
              Black
            </button>
            <button
              style={{ fontWeight: dark && 900 }}
              onClick={() => toggleCategory('dark')}
              className="sort"
            >
              Dark
            </button>
            <button
              style={{ fontWeight: green && 900 }}
              onClick={() => toggleCategory('green')}
              className="sort"
            >
              Green
            </button>
            <button
              style={{ fontWeight: oolong && 900 }}
              onClick={() => toggleCategory('oolong')}
              className="sort"
            >
              Oolong
            </button>
            <button
              style={{ fontWeight: white && 900 }}
              onClick={() => toggleCategory('white')}
              className="sort"
            >
              White
            </button>
            <button
              style={{ fontWeight: yellow && 900 }}
              onClick={() => toggleCategory('yellow')}
              className="sort"
            >
              Yellow
            </button>
          </div>
          <div className="cards">
            {items.map((tea) => (
              <TeaCard key={tea.id} tea={tea} popUp={getPopUpInformation} />
            ))}
          </div>
        </div>
      </FancyWindow>
      {popUp && <PopUp closePopUp={closePopUp} popUp={popUp} />}
    </div>
  );
}

export default Tea;

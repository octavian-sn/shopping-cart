import React from 'react';
import FancyWindow from './FancyWindow';
import { Context } from '../Context';
import { useContext } from 'react';
import '../styles/pop-up.css';

function PopUp({
  closePopUp,
  popUp: { name, description, category, price, source, id },
}) {
  const { addToCart } = useContext(Context);

  return (
    <div onClick={closePopUp} className="popup-overlay">
      <FancyWindow size="small">
        <div className="pop-up">
          <img src={source}></img>
          <div className="information">
            <button className="close"></button>
            <p>{name}</p>
            <p>{description}</p>
            <p>{`${category} tea leaves (100gr)`}</p>
            <p>{`${price} €`}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(id);
              }}
              className="add"
            >
              Add to cart
            </button>
          </div>
        </div>
      </FancyWindow>
    </div>
  );
}

export default PopUp;

import React, { useState } from 'react';
import favoriteIcon from '../assets/favorite.png';
import notFavoriteIcon from '../assets/not-favorite.png';
import { Context } from '../Context';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import '../styles/tea-card.css';

function TeaCard({
  tea: { name, category, price, id, description, source, favorite },
  popUp,
}) {
  const { addToCart, addToFavorites } = useContext(Context);

  const [showFavButton, setShowFavButton] = useState(favorite ? true : false);
  const favoriteButton = favorite ? (
    <button
      onClick={() => addToFavorites(id)}
      style={{ backgroundImage: `url(${favoriteIcon})` }}
    ></button>
  ) : (
    <button
      onClick={() => addToFavorites(id)}
      style={{
        backgroundImage: `url(${notFavoriteIcon})`,
        opacity: showFavButton ? '1' : '0',
      }}
    ></button>
  );

  return (
    <div
      className="tea-card"
      onMouseEnter={() => !favorite && setShowFavButton(true)}
      onMouseLeave={() => !favorite && setShowFavButton(false)}
    >
      {/* Image side with title and fav button */}
      <div
        onClick={() =>
          popUp({ name, description, category, price, source, id })
        }
        className="image"
        style={{ backgroundImage: `url(${source})` }}
      >
        <p>{name}</p>
        {favoriteButton}
      </div>
      <div className="information">
        <p>{`${name} - ${category} tea leaves (100 gr)`}</p>
        <p>{`${price} €`}</p>
        <button onClick={() => addToCart(id)}>Add to cart</button>
      </div>
    </div>
  );
}

TeaCard.propTypes = {
  // name: PropTypes.isRequired,
  // Add the rest
};

export default TeaCard;

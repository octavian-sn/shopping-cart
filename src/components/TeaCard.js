import React, { useState } from 'react';
import favoriteIcon from '../assets/favorite.png';
import notFavoriteIcon from '../assets/not-favorite.png';
import { Context } from '../Context';
import { useContext } from 'react';
import '../styles/tea-card.css';

function TeaCard({
  tea: { name, category, price, id, description, source, favorite },
}) {
  const { addToCart } = useContext(Context);

  const [showFavButton, setShowFavButton] = useState(favorite ? true : false);

  return (
    <div
      className="tea-card"
      onMouseEnter={() => !favorite && setShowFavButton(true)}
      onMouseLeave={() => !favorite && setShowFavButton(false)}
    >
      {/* Image side with title and fav button */}
      <div className="image" style={{ backgroundImage: `url(${source})` }}>
        <p>{name}</p>
        {favorite ? (
          <button style={{ backgroundImage: `url(${favoriteIcon})` }}></button>
        ) : (
          <button
            style={{
              backgroundImage: `url(${notFavoriteIcon})`,
              opacity: showFavButton ? '1' : '0',
            }}
          ></button>
        )}
      </div>
      <div className="information">
        <p>{`${name} - ${category} tea leaves (100 gr)`}</p>
        <p>{`${price} €`}</p>
        <button onClick={() => addToCart(id)}>Add to cart</button>
      </div>
    </div>
  );
}

export default TeaCard;

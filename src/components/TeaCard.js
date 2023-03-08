import React, { useState } from 'react';
import favoriteIcon from '../assets/favorite.png';
import notFavoriteIcon from '../assets/not-favorite.png';
import '../styles/tea-card.css';

function TeaCard({
  data: { name, category, price, id, description, source, favorite },
}) {
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
    </div>
  );
}

export default TeaCard;

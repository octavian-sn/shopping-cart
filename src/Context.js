import { createContext, useState, useEffect } from 'react';
import teaData from './assets/items';

const Context = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState(teaData);
  // Items being displayed in the 'Tea' window
  const [items, setItems] = useState(data);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    favorite: false,
    black: true,
    dark: true,
    green: true,
    oolong: true,
    white: true,
    yellow: true,
  });
  useEffect(() => {
    setItems(data);
    updateFavorites();
  }, [data]);
  useEffect(() => {
    filters.favorite === true && setItems(favorites);
  }, [favorites]);

  // Cart list
  const addToCart = (id) => {
    setCart((prevCart) => [...prevCart, data.find((tea) => tea.id === id)]);
  };

  // Favorites list
  const updateFavorites = () => {
    setFavorites(data.filter((item) => item.favorite === true && item));
  };

  // Add tea to favorites list
  const addToFavorites = (id) => {
    setData((prevData) => {
      return prevData.map((item) => {
        return item.id === id ? { ...item, favorite: !item.favorite } : item;
      });
    });
  };

  // Toggle favorites filter
  const showFavorites = () => {
    filters.favorite === true ? setItems(favorites) : setItems(favorites);
    setItems(filters.favorite === true ? data : favorites);
    setFilters((prevFilters) => ({
      ...prevFilters,
      favorite: !prevFilters.favorite,
    }));
  };

  return (
    <Context.Provider
      value={{
        items,
        cart,
        filters,
        addToCart,
        addToFavorites,
        showFavorites,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };

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
    black: false,
    dark: false,
    green: false,
    oolong: false,
    white: false,
    yellow: false,
  });
  useEffect(() => {
    setItems(data);
    updateFavorites();
    console.log('from data');
  }, [data]);
  useEffect(() => {
    filters.favorite === true && setItems(favorites);
    console.log('from favorites');
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
    setItems(filters.favorite === true ? data : favorites);
    setFilters((prevFilters) => {
      let newFilters = { ...prevFilters };
      for (let key in newFilters) {
        key === 'favorite'
          ? (newFilters[key] = !newFilters[key])
          : (newFilters[key] = false);
      }
      return newFilters;
    });
  };

  const testing = () => console.log(filters, otherFilters());

  // Toggle tea category
  const filterIsOn = (object = filters) => {
    let categoryFilter = Object.values(object);
    categoryFilter.shift();
    return categoryFilter.some((filter) => filter === true);
  };
  const otherFilters = (currentFilter) => {
    let newFilters = {};
    for (const key in filters) {
      if (key !== 'favorite' && key !== currentFilter) {
        newFilters[key] = filters[key];
      }
    }
    // console.log(currentFilter);
    return Object.values(newFilters).some((filter) => filter === true);
  };
  const toggleCategory = (category) => {
    if (filters[category] && otherFilters(category)) {
      setItems((prevItems) =>
        prevItems.filter((item) => item.category !== category)
      );
    } else if (filters[category]) {
      setItems(data);
    } else if (filterIsOn()) {
      setItems((prevItems) => {
        const newItems = data.filter((item) => item.category === category);
        return prevItems.concat(newItems);
      });
    } else {
      setItems(data.filter((item) => item.category === category));
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      favorite: false,
      [category]: !prevFilters[category],
    }));
  };

  return (
    <Context.Provider
      value={{
        items,
        cart,
        filters,
        testing,
        toggleCategory,
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

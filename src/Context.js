import { createContext, useState, useEffect } from 'react';
import teaData from './assets/items';

const Context = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState(teaData);
  // Items being displayed in the 'Tea' window
  const [items, setItems] = useState(data);
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
    filters.favorite === true &&
      setItems(data.filter((item) => item.favorite === true));
    filterIsOn() && reRenderFiltered();
  }, [data]);

  // Cart list
  const addToCart = (id) => {
    setCart((prevCart) => [...prevCart, data.find((tea) => tea.id === id)]);
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
    setItems(
      filters.favorite === true
        ? data
        : data.filter((item) => item.favorite === true)
    );
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

  const testing = () => console.log(toggleCategory('black'));

  // Render filtered after changing 'favorite' property
  const reRenderFiltered = () => {
    let newArray = [];
    for (const key in filters) {
      if (filters[key] === true) {
        newArray = newArray.concat(
          data.filter((item) => item.category === key)
        );
      }
    }
    setItems(newArray);
  };

  // Toggle tea category
  // Check if any filter is on
  const filterIsOn = (object = filters) => {
    let categoryFilter = Object.values(object);
    categoryFilter.shift();
    return categoryFilter.some((filter) => filter === true);
  };
  // Check if other filters than the current pressed are on
  const otherFilters = (currentFilter) => {
    let newFilters = {};
    for (const key in filters) {
      if (key !== 'favorite' && key !== currentFilter) {
        newFilters[key] = filters[key];
      }
    }
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

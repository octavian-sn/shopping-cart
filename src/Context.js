import { createContext, useState, useEffect } from 'react';
import teaData from './assets/items';

const Context = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState(teaData);
  // 'items' are displayed in the 'Tea' window
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
  const [sorting, setSorting] = useState({
    criteria: null,
    name: 'ascending',
    price: 'ascending',
  });
  useEffect(() => {
    setItems(data);
    filters.favorite === true &&
      setItems(data.filter((item) => item.favorite === true));
    filterIsOn() && reRenderFiltered();
  }, [data]);

  const addToCart = (id, qty = 1) => {
    setCart((prevCart) => {
      const teaAlreadyInCart = prevCart.some((tea) => tea.id === id);
      const item = data.find((tea) => tea.id === id);
      if (teaAlreadyInCart) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + qty } : item
        );
      } else return [...prevCart, { ...item, quantity: qty }];
    });
  };
  const removeFromCart = (id, qty = 1) => {
    setCart((prevCart) => {
      const item = prevCart.find((tea) => tea.id === id);
      if (id === 'all') return [];
      if (item.quantity > 1) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - qty } : item
        );
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };
  const setCartItemValue = (id, qty) => {
    setCart((prevCart) => {
      if (prevCart.length === 1 && qty === 0) return [];
      if (+qty === 0) return prevCart.filter((item) => item.id !== id);
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: +qty } : item
      );
    });
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
    setSorting({ criteria: null, name: 'ascending', price: 'ascending' });
  };

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
    setSorting({ criteria: null, name: 'ascending', price: 'ascending' });
  };

  // Toggle tea category
  // Check if any filter is on
  const filterIsOn = (object = filters) => {
    let categoryFilter = Object.values(object);
    categoryFilter.shift();
    return categoryFilter.some((filter) => filter === true);
  };
  // Check if other filters than the one being pressed are on
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
    setSorting({ criteria: null, name: 'ascending', price: 'ascending' });
  };

  // Sort tea
  const sort = (criteria) => {
    const newArray = [...items];
    if (criteria === 'name') {
      if (sorting.name === 'ascending') {
        newArray.sort((a, b) => {
          const nameA = a.name.toLocaleUpperCase();
          const nameB = b.name.toLocaleUpperCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        setSorting({
          criteria: 'name',
          name: 'descending',
          price: 'ascending',
        });
      } else {
        newArray.sort((a, b) => {
          const nameA = a.name.toLocaleUpperCase();
          const nameB = b.name.toLocaleUpperCase();
          if (nameA < nameB) return 1;
          if (nameA > nameB) return -1;
          return 0;
        });
        setSorting({ criteria: 'name', name: 'ascending', price: 'ascending' });
      }
    } else {
      if (sorting.price === 'ascending') {
        newArray.sort((a, b) => a.price - b.price);
        setSorting({
          criteria: 'price',
          name: 'ascending',
          price: 'descending',
        });
      } else {
        newArray.sort((a, b) => b.price - a.price);
        setSorting({
          criteria: 'price',
          name: 'ascending',
          price: 'ascending',
        });
      }
    }
    setItems(newArray);
  };

  return (
    <Context.Provider
      value={{
        items,
        cart,
        filters,
        sorting,
        sort,
        toggleCategory,
        addToCart,
        removeFromCart,
        setCartItemValue,
        addToFavorites,
        showFavorites,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };

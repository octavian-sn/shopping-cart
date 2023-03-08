import { createContext, useState, useEffect } from 'react';
import teaData from './assets/items';

const Context = createContext();

function ContextProvider({ children }) {
  const [data, setItems] = useState([]);
  useEffect(() => {
    setItems(teaData);
  }, []);

  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    let item = data.find((tea) => tea.id === id);
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <Context.Provider value={{ data, cart, addToCart }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };

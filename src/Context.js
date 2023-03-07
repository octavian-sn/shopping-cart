import { createContext, useState, useEffect } from 'react';
import data from './assets/items';

const Context = createContext();

function ContextProvider({ children }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(data);
  }, []);

  return <Context.Provider value={{ items }}>{children}</Context.Provider>;
}

export { Context, ContextProvider };

import { createContext, useState, useEffect } from 'react';
import teaData from './assets/items';

const Context = createContext();

function ContextProvider({ children }) {
  const [data, setItems] = useState([]);
  useEffect(() => {
    setItems(teaData);
  }, []);

  return <Context.Provider value={{ data }}>{children}</Context.Provider>;
}

export { Context, ContextProvider };

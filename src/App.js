import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './styles/app.css';

function App() {
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => setShowCart((prevState) => !prevState);
  return (
    <div id="app">
      <Header toggleCart={toggleCart} />
      <Content />
      <Footer />
      <Cart toggleCart={toggleCart} showCart={showCart} />
    </div>
  );
}

export default App;

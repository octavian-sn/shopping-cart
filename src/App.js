import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './styles/app.css';

function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
      {/* <Cart /> */}
    </div>
  );
}

export default App;

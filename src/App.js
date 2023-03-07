import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './styles/app.css';

function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

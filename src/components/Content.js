import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Tea from '../Pages/Tea';
import Contact from '../Pages/Contact';
import '../styles/content.css';

function Content() {
  return (
    <div id="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tea" element={<Tea />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Content;

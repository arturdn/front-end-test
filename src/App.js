import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dexie from 'dexie';

import Header from './layout/header/Header';
import Cart from './pages/cart/Cart';
import Product from './pages/product-detail/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Cart db={new Dexie('Cart')} />} />
          <Route path="/product/:id" element={<Product db={new Dexie('ProductInfo')} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

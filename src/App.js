import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dexie from 'dexie';

import Header from './layout/header/Header';
import Cart from './pages/cart/Cart';
import Product from './pages/product-detail/Product';

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#22577E',
      light: '#5584AC',
      dark: '#194260',
    },
    secondary: {
      main: '#95D1CC',
      light: '#bdf1ed',
      dark: '#609c97',
    },
    info: {
      main: '#F6F2D4',
    },
    action: {
      main: 'white',
    }
  },
  typography: {
    fontFamily: [
      'Rubik',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Cart db={new Dexie('Cart')} />} />
          <Route path="/product/:id" element={<Product db={new Dexie('ProductInfo')} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

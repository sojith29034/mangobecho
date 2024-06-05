import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './sections/ProductList';
import Cart from './sections/Cart';
import Navbar from './sections/Navbar';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
      <CartProvider>
        <Navbar />
        <ProductList />
        <hr/>
        <Cart />
      </CartProvider>
  );
}

export default App;

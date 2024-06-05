import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './sections/ProductList';
import Cart from './sections/Cart';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    
      <CartProvider>
        <ProductList />
        <hr/>
        <Cart />
      </CartProvider>
  );
}

export default App;

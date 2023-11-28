import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import { ProductsProvider } from './context/ProductContext';


const App = () => {
  return (
    <>
      <ProductsProvider>
        <Navigation />
        <Products />
      </ProductsProvider>
    </>
  );
};

export default App;

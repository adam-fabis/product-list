import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import { ProductsProvider } from './context/ProductContext';


const App = (props) => {
  return (
    <>
      <ProductsProvider>
        <Navigation />
        <Products />
      </ProductsProvider>
    </>
  );
};

App.propTypes = {

};

export default App;

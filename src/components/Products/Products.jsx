import React from 'react';
import { useProducts } from '../../context/ProductContext';
import loader from '/src/assets/icons/loader.svg'
import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';
import EmptyList from '../EmptyList/EmptyList';


const Products = (props) => {
  const { productsItems, loading } = useProducts();

  if (loading) {
    return (
      <div className='container flex pt-13 pb-8 justify-center'>
        <img className='animate-spin' src={loader} alt='loader' />
      </div>
    )
  }



  return (
    <section className='bg-bgGray'>
      <div className='grid grid-cols-1 gap-6 container mx-auto px-6 pt-13 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-27'>
        {productsItems.length > 0 ? (
          productsItems.map(product => (
            <Card
              id={product.id}
              promo={product.promo}
              active={product.active}
              image={product.image}
              name={product.name}
              description={product.description}
              rating={product.rating} />
          ))
        ) : (
          <EmptyList />
        )}
      </div>
      <Pagination />
    </section>
  );
};

export default Products;

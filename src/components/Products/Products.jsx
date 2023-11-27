import React from 'react';
import { useProducts } from '../../context/ProductContext';
import blankStar from '/src/assets/icons/blank-star.svg'
import goldenStar from '/src/assets/icons/golden-star.svg'
import Pagination from '../Pagination/Pagination';


const Products = (props) => {
  const { productsItems, loading, currentPage, setCurrentPage } = useProducts();

  if (loading) {
    return <p>Brak danych produktów</p>; // TODO: dodać loadera
  }

  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    for (let i = 0; i < maxStars; i++) {
      if (i < rating) {
        stars.push(<img key={i} src={goldenStar} alt="Golden Star" />);
      } else {
        stars.push(<img key={i} src={blankStar} alt="Blank Star" />);
      }
    }
    return stars;
  };

  return (
    <section className='bg-bgGray'>
      <div className='grid grid-cols-1 gap-6 container mx-auto px-6 pt-13 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-27'>
        {productsItems.map(product => (
          <div key={product.id} className={`flex flex-col relative ${product.active ? 'grayscale pointer-events-none' : null}`}>
            {product.promo && !product.active ? <p className='absolute top-4 left-0 py-1 px-4 text-white bg-Orange'>Promo</p> : null}
            <img className='aspect-[288/170] object-cover rounded-t-md' src={product.image} alt="product" />
            <div className='flex flex-col justify-between bg-white p-4 flex-1 rounded-b-md'>
              <div className='flex flex-col gap-2'>
                <p className='text-dark font-semibold text-lg'>
                  {product.name}
                </p>
                <p>
                  {product.description}
                </p>
              </div>
              <div className='flex flex-col gap-4 pt-8'>
                <div className='flex gap-2'>
                  {renderStars(product.rating)}
                </div>
                <button className='bg-lightBlue py-[11px] rounded-md text-white font-semibold text-sm'>
                  {!product.active ? 'Show details' : 'Unavailable'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default Products;

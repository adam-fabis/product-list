import React, { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import loader from '/src/assets/icons/loader.svg';
import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';
import EmptyList from '../EmptyList/EmptyList';
import Modal from 'react-modal';
import close from '/src/assets/icons/close.svg';

Modal.setAppElement('#modal-container');

const Products = () => {
  const { productsItems, loading } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setModalState] = useState(false);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  const showDetails = (product) => {
    setSelectedProduct(product);
    handleOpenModal();
  };

  if (loading) {
    return (
      <div className='container flex pt-13 pb-8 justify-center'>
        <img className='animate-spin' src={loader} alt='loader' />
      </div>
    );
  }

  return (
    <section className='bg-bgGray'>
      <div className='grid grid-cols-1 gap-6 container mx-auto px-6 pt-13 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:px-27'>
        {productsItems.length > 0 ? (
          productsItems.map((product) => (
            <Card
              key={product.id}
              {...product}
              onShowDetails={showDetails}
            />
          ))
        ) : (
          <EmptyList />
        )}
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="fixed inset-0 bg-darkerGray/[0.9]"
        className="bg-white rounded-lg absolute top-20 w-10/12 left-1/2 -translate-x-1/2 backdrop-opacity-90 max-w-xl lg:top-1/2 lg:-translate-y-1/2"
      >
        {selectedProduct && (
          <div className='relative'>
            <img className="aspect-[288/170] w-full object-cover rounded-t-md" src={selectedProduct.image} alt="product image" />
            <div className='p-6'>
              <p className='text-dark font-semibold text-lg pb-2'>{selectedProduct.name}</p>
              <p>{selectedProduct.description}</p>
            </div>
            <button className='absolute top-4 right-4' onClick={handleCloseModal}><img src={close} alt="Close button" /></button>
          </div>
        )}
      </Modal>
      <Pagination />
    </section>
  );
};

export default Products;

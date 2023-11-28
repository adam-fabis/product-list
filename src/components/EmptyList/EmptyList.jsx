import React from 'react';
import bag from '/src/assets/icons/bag.svg'

const EmptyList = () => {
    return (
        <div className='bg-white max-w-xl py-28 flex flex-col justify-center items-center col-span-full mx-auto w-full'>
            <img src={bag} alt="empty bag icon" />
            <p className='text-lg text-darkerGray pt-6 pb-2'>Ooops… It’s empty here</p>
            <p className='text-darkGray'>There are no products on the list</p>
        </div>
    );
};

export default EmptyList;

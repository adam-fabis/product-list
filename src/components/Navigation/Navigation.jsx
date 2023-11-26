import React from 'react';
import PropTypes from 'prop-types';
import Logo from '/src/assets/icons/logo.svg';
import Avatar from '/src/assets/images/avatar.jpg';
import SearchLogo from '/src/assets/icons/search.svg';

const Navigation = (props) => {
  return (
    <nav className='container mx-auto px-6 pt-13 pb-8 bg-white xl:px-27'>
      <div className='flex flex-wrap items-center justify-between lg:flex-nowrap lg:justify-normal'>
        <div className='lg:mr-[105px]'><img src={Logo} alt="Logo" /></div>
        <div className='lg:order-3 lg: ml-auto'><img src={Avatar} /></div>
        <div className='w-full pt-7 lg:w-auto lg:flex lg:items-center lg:pt-0 lg:gap-6'>
          <div className='relative'>
            <input placeholder='Search' className='w-full p-4 border border-Gray rounded-xl placeholder:text-darkerGray lg:w-98' />
            <img className='absolute top-1/2 right-5 -translate-y-1/2' src={SearchLogo} />
          </div>
          <div className='flex gap-8 pt-8 lg:pt-0'>
            <div className='flex flex-row-reverse gap-1'>
              <label htmlFor="active">Active</label>
              <input id='active' type="checkbox" className="appearance-none w-6 h-6 border border-gray-500 rounded checked:bg-Blue" />
            </div>
            <div className='flex flex-row-reverse gap-1'>
              <label htmlFor="promo">Promo</label>
              <input id='promo' type="checkbox" className="appearance-none w-6 h-6 border border-gray-500 rounded checked:bg-Blue" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {

};

export default Navigation;

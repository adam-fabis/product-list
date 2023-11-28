import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';


const Card = ({ id, promo, active, image, name, description, rating }) => {
    return (
        <div key={id} className={`flex flex-col relative ${active ? 'grayscale pointer-events-none' : null}`}>
            {promo && !active ? <p className='absolute top-4 left-0 py-1 px-4 text-white bg-Orange'>Promo</p> : null}
            <img className='aspect-[288/170] object-cover rounded-t-md' src={image} alt="product" />
            <div className='flex flex-col justify-between bg-white p-4 flex-1 rounded-b-md'>
                <div className='flex flex-col gap-2'>
                    <p className='text-dark font-semibold text-lg'>
                        {name}
                    </p>
                    <p>
                        {description}
                    </p>
                </div>
                <div className='flex flex-col gap-4 pt-8'>
                    <div className='flex gap-2'>
                        <Rating rating={rating} />
                    </div>
                    <button className='bg-lightBlue py-[11px] rounded-md text-white font-semibold text-sm'>
                        {!active ? 'Show details' : 'Unavailable'}
                    </button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {

};

export default Card;

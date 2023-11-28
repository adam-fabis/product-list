import React from 'react';
import PropTypes from 'prop-types';
import blankStar from '/src/assets/icons/blank-star.svg'
import goldenStar from '/src/assets/icons/golden-star.svg'
import { ratingHandler } from '../../helpers/ratingHandler';


const Card = ({ id, promo, active, image, name, description, rating, onShowDetails }) => {
    const getStars = () => {
        return ratingHandler(rating).map((star, index) => star ? <img key={`${id}${index}`} src={goldenStar} alt="Golden Star" /> : <img key={`${id}${index}`} src={blankStar} alt="Blank Star" />)
    }
    return (
        <div key={id} className={`flex flex-col relative ${!active && 'grayscale pointer-events-none'}`}>
            {promo && <p className='absolute top-4 left-0 py-1 px-4 text-white bg-Orange'>Promo</p>}
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
                        {getStars()}
                    </div>
                    <button
                        onClick={() => onShowDetails({id, image, name, description})}
                        className='bg-lightBlue py-[11px] rounded-md text-white font-semibold text-sm'
                        disabled={!active}
                    >
                        {active ? 'Show details' : 'Unavailable'}
                    </button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    promo: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    onShowDetails: PropTypes.func.isRequired,
};

export default Card;

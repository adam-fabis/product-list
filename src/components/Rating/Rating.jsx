import React from 'react';
import blankStar from '/src/assets/icons/blank-star.svg'
import goldenStar from '/src/assets/icons/golden-star.svg'
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
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

Rating.propTypes = {

};

export default Rating;

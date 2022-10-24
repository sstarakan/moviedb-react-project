import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";


const StarsRating = ({vote_average}) => {
    return (
        <StarRatings
            rating={vote_average}
            starRatedColor="gold"
            numberOfStars={10}
            starDimension='15px'
            starSpacing='1px'
            changeRating={() => {
            }}
        />
    );
};

export {StarsRating};
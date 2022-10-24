import React from 'react';

import css from './MovieInfo.module.css'

const MovieInfo = ({movie}) => {
    const {title, release_date, popularity} = movie

    return (
        <div className={css.MovieInfo}>
            <h4>{title}</h4>
            <p>Release date: {release_date}</p>
            <p>Popularity: {popularity}</p>
        </div>
    );
};

export {MovieInfo};
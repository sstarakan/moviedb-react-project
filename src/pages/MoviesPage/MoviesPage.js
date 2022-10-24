import React from 'react';

import {MovieList} from "../../components";
import css from './MoviesPage.module.css'

const MoviesPage = () => {
    return (
        <div className={css.MoviesPage}>
            <MovieList/>
        </div>
    );
};

export {MoviesPage};
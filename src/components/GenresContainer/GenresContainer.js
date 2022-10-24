import React from 'react';
import {useSelector} from "react-redux";

import css from './GenresContainer.module.css'
import {GenreBudge} from "../GenreBudge/GenreBudge";

const GenresContainer = () => {
    const {genres} = useSelector(state => state.genreReducer);

    return (
        <div className={css.GenresContainer}>
            {genres.map(genre => <GenreBudge key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresContainer};
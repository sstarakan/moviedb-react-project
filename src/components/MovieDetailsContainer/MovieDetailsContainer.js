import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {imageOriginalURL} from "../../config";
import css from './MovieDetailsContainer.module.css'
import {MovieDetails} from "../MovieDetails/MovieDetails";

const MovieDetailsContainer = () => {
    const dispatch = useDispatch();
    const {movie} = useSelector(state => state.movieReducer);

    const {id} = useParams();

    useEffect(() => {
        dispatch(movieActions.getMovie({id}))
    }, [id])

    return (
        <div>
            {movie && <div style={{backgroundImage: `url('${imageOriginalURL}${movie.backdrop_path}')`}}
                           className={css.MovieDetails}>
                <div className={css.wrap}><MovieDetails key={movie.id} movie={movie}/></div>
            </div>}
        </div>
    );
};

export {MovieDetailsContainer};
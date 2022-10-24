import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {PaginationComponent} from "../PaginationComponent/PaginationComponent";
import css from './MovieList.module.css'

const MovieList = () => {
    const dispatch = useDispatch();
    const {movies, page} = useSelector(state => state.movieReducer);

    const {page: navPage} = useParams();


    useEffect(() => {
        if (+navPage !== page) {
            dispatch(movieActions.setPage(+navPage))
        }
        dispatch(movieActions.getPage({page}))
    }, [page])

    return (
        <div className={css.Wrap}>
            <div className={css.MovieList}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <PaginationComponent/>
            </div>
        </div>

    );
};

export {MovieList};
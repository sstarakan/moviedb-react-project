import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import css from './GenreFilterList.module.css'
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {PaginationComponent} from "../PaginationComponent/PaginationComponent";

const GenreFilterList = () => {
    const dispatch = useDispatch();
    const {movies, page} = useSelector(state => state.movieReducer);
    const {movieSearchGenres} = useSelector(state => state.genreReducer);

    const {searchGenre, page: navPage} = useParams();

    useEffect(() => {
        if (+navPage !== page) {
            dispatch(movieActions.setPage(+navPage))
        }

        if (movieSearchGenres.length) {
            dispatch(movieActions.getMovieWithGenres({searchGenre: movieSearchGenres.toString(), page}))
        } else {
            dispatch(movieActions.getMovieWithGenres({searchGenre, page}))
        }

    }, [page, searchGenre, movieSearchGenres])

    return (
        <div className={css.Wrap}>
            <div className={css.GenreFilterList}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <PaginationComponent movieName={searchGenre}/>
            </div>
        </div>
    );
};

export {GenreFilterList};
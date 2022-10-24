import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {movieActions} from "../../redux";
import css from './PaginationComponent.module.css'

const PaginationComponent = ({movieName}) => {
    const {page, totalPages, paginationTrigger} = useSelector(state => state.movieReducer);
    const {themeTrigger} = useSelector(state => state.genreReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navFunc = (searchValue, page, trigger) => {
        switch (trigger) {
            case 'movieList':
                navigate(`/movies/${page}`);
                break;
            case 'searchList':
                navigate(`/search/name=${movieName}&page=${page}`);
                break;
            case 'genreList':
                navigate(`/search/withGenres=${movieName}&page=${page}`);
                break;
            default:
                break;
        }
    }

    return (
        <div className={`${css.PaginationComponent} ${themeTrigger ? '' : css.PaginationComponentDark}`}>
            {page === 1 ? '' : <button onClick={() => {
                dispatch(movieActions.prevPage())
                navFunc(movieName, page - 1, paginationTrigger)
            }}>Prev</button>}

            {page === 1 ? '' : <button onClick={() => {
                dispatch(movieActions.setPage(1))
                navFunc(movieName, 1, paginationTrigger)
            }}>{1}</button>}

            {page > 2 ? <span>. . .</span> : ''}

            {page <= 4 ? '' : <button onClick={() => {
                dispatch(movieActions.setPage(page - 2))
                navFunc(movieName, page - 2, paginationTrigger)
            }}>{page - 2}</button>}

            {page <= 4 ? '' : <button onClick={() => {
                dispatch(movieActions.setPage(page - 1))
                navFunc(movieName, page - 1, paginationTrigger)
            }}>{page - 1}</button>}

            <button onClick={() => dispatch(movieActions.setPage(page))}>{page}</button>

            {page >= totalPages - 4 ? '' :
                <button onClick={() => {
                    dispatch(movieActions.setPage(page + 1))
                    navFunc(movieName, page + 1, paginationTrigger)
                }}>{page + 1}</button>}

            {page >= totalPages - 4 ? '' :
                <button onClick={() => {
                    dispatch(movieActions.setPage(page + 2))
                    navFunc(movieName, page + 2, paginationTrigger)
                }}>{page + 2}</button>}

            {page < totalPages - 1 ? <span>. . .</span> : ''}

            {page === totalPages ? '' :
                <button onClick={() => {
                    dispatch(movieActions.setPage(totalPages))
                    navFunc(movieName, totalPages, paginationTrigger)
                }}>{totalPages}</button>}

            {page === totalPages ? '' : <button onClick={() => {
                dispatch(movieActions.nextPage());
                navFunc(movieName, page + 1, paginationTrigger)
            }}>Next</button>}
        </div>
    );
};

export {PaginationComponent};
import React, {useEffect} from 'react';

import css from './SearchList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import {PaginationComponent} from "../PaginationComponent/PaginationComponent";
import {useParams} from "react-router-dom";
import {movieActions} from "../../redux";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";

const SearchList = () => {
    const dispatch = useDispatch();
    const {searchList, page, loading} = useSelector(state => state.movieReducer);
    const {movieName, page: navPage} = useParams();


    useEffect(() => {
        if(+navPage !== page){
            dispatch(movieActions.setPage(+navPage))
        }
        dispatch(movieActions.searchMovie({searchValue: movieName ,page}))
    }, [page])

    return (
        <div className={css.Wrap}>
            {loading&&<LoadingComponent/>}
            <div className={css.SearchList}>
                {searchList.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <PaginationComponent movieName={movieName}/>
            </div>
        </div>
    );
};

export {SearchList};
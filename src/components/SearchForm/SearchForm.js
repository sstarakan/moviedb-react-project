import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {movieValidator} from "../../validators";
import {movieActions} from "../../redux";
import css from './SearchForm.module.css'

const SearchForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(movieValidator),
        mode: "all"
    });

    function submit({movieName}) {
        dispatch(movieActions.searchMovie({searchValue: movieName, page: 1}))
        navigate(`/search/name=${movieName}&page=${1}`)
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={css.SearchForm}>
            <input type="text" placeholder={'search'} {...register('movieName')} />
            <button disabled={!isValid}>Search</button>
            {errors.movieName && <div>{errors.movieName.message}</div>}
        </form>
    );
};

export {SearchForm};
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Header.module.css'
import {SearchForm} from "../SearchForm/SearchForm";
import {genreActions} from "../../redux";
import {GenresContainer} from "../GenresContainer/GenresContainer";

const Header = () => {
    const dispatch = useDispatch();
    const {genresToggle, themeTrigger} = useSelector(state => state.genreReducer);


    useEffect(() => {
        dispatch(genreActions.getAll());
        document.body.style.background = '#fff'
    }, [])

    return (
        <div className={`${css.Header} ${themeTrigger ? '' : css.HeaderDark}`}>
            <div className={css.HeaderWrap}>
                <button onClick={() => {
                    dispatch(genreActions.themeChanger())
                }}>theme
                </button>
                <div>
                    <SearchForm/>
                    <button onClick={() => dispatch(genreActions.changeToggle())}>genres filter</button>
                </div>
                <div>{genresToggle && <GenresContainer/>}</div>
            </div>
        </div>
    );
};

export {Header};
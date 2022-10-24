import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Header.module.css'
import {SearchForm} from "../SearchForm/SearchForm";
import {genreActions} from "../../redux";
import {GenresContainer} from "../GenresContainer/GenresContainer";
import {UserInfo} from "../UserInfo/UserInfo";

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
                <div>
                    <button className={css.themeButton} onClick={() => {
                        dispatch(genreActions.themeChanger())
                    }}>Theme
                    </button>
                </div>
                <div>
                    <SearchForm/>
                    <div>
                        <button onClick={() => dispatch(genreActions.changeToggle())}>Genres filter</button>
                    </div>
                </div>
                <UserInfo/>
            </div>
            <div className={css.genresList}>{genresToggle && <GenresContainer/>}</div>
        </div>
    );
};

export {Header};
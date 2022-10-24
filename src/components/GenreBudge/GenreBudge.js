import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import css from './GenreBudge.module.css'
import {genreActions} from "../../redux";

const GenreBudge = ({genre}) => {
    const dispatch = useDispatch();
    const {movieSearchGenres, themeTrigger} = useSelector(state => state.genreReducer);

    let parameter = '';

    if (movieSearchGenres.length) {
        parameter = movieSearchGenres.toString()
    } else {
        parameter = genre.id
    }

    return (
        <Link to={`/search/withGenres=${parameter}&page=${1}`}
              className={`${css.GenreBudge} ${themeTrigger ? '' : css.GenreBudgeDark}`}
              onClick={() => {
                  dispatch(genreActions.addGenreToFilterList(genre.id))
              }}>{genre?.name}</Link>
    );
};

export {GenreBudge};
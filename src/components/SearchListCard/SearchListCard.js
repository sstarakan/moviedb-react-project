import React from 'react';
import {Link} from "react-router-dom";

import css from './SearchListCard.module.css'

const SearchListCard = ({movie: {original_title, id}}) => {
    return (
        <Link to={`/movieDetails/${id}`}>
            <div className={css.SearchListCard}>
                <h3>{original_title}</h3>
            </div>
        </Link>
    );
};

export {SearchListCard};
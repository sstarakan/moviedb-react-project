import React from 'react';

import {SearchList} from "../../components";
import css from './SearchPage.module.css'

const SearchPage = () => {
    return (
        <div className={css.SearchPage}>
            <SearchList/>
        </div>
    );
};

export {SearchPage};
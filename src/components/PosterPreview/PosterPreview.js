import React from 'react';

import {imageURL} from "../../config";
import css from './PosterPreview.module.css'

const PosterPreview = ({poster_path, title}) => {

    return (
        <div className={css.PosterPreview}>
            <img src={`${imageURL}${poster_path}`} alt={`${title}`}/>
        </div>
    );
};

export {PosterPreview};
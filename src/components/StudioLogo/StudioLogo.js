import React from 'react';

import {imageURL} from "../../config";
import css from './StudioLogo.module.css'

const StudioLogo = ({company}) => {
    const {logo_path, name} = company;
    return (
        <div className={css.StudioLogo}>
            {logo_path ? <img src={`${imageURL}${logo_path}`} alt={name}/> : <h4>{name}</h4>}
        </div>
    );
};

export {StudioLogo};
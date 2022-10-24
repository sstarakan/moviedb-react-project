import React from 'react';

import {GenreBudge} from "../GenreBudge/GenreBudge";
import css from './MovieDetails.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
import {StudioLogo} from "../StudioLogo/StudioLogo";

const MovieDetails = ({movie}) => {
    const {title, overview, genres, vote_average, tagline, production_companies} = movie;

    return (
        <div className={css.MovieDetails}>
            <div>
                <h1>{title}</h1>
                {tagline ? <h2>{tagline}</h2> : ''}
                {genres.map(genre => <GenreBudge key={genre.id} genre={genre}/>)}
                <div className={css.starsDiv}>
                    <StarsRating vote_average={vote_average}/>
                    <span>Vote average: {vote_average}</span>
                </div>
            </div>
            <div className={css.companyLogo}>
                {production_companies?.map(company =>
                    <div>
                        <StudioLogo key={company.id} company={company}/>
                    </div>
                )}
            </div>
            <div>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export {MovieDetails};
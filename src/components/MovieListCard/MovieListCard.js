import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import css from './MovieListCard.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBudge} from "../GenreBudge/GenreBudge";

const MovieListCard = ({movie}) => {
    const {genres, themeTrigger} = useSelector(state => state.genreReducer);

    const {poster_path, vote_average, genre_ids, title, id} = movie;

    return (
        <Link to={`/movieDetails/${id}`}>
            <div className={`${css.MovieListCard} ${themeTrigger ? '' : css.MovieListCardDark}`}>
                <PosterPreview poster_path={poster_path} title={title}/>
                <div className={css.MovieListCardGenreContainer}>
                    {genre_ids.map(id => {
                        const genre = genres.find(genre => genre.id === id);
                        return <GenreBudge key={id} genre={genre}/>
                    })}
                </div>
                <MovieInfo movie={movie}/>
                <StarsRating vote_average={vote_average}/>
            </div>
        </Link>
    );
};

export {MovieListCard};
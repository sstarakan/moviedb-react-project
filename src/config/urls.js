const baseURL = 'https://api.themoviedb.org/3';
const imageURL = 'https://image.tmdb.org/t/p/w500';
const imageOriginalURL = 'https://image.tmdb.org/t/p/original';

const urls = {
    moviePage: '/discover/movie?page=',
    genres: '/genre/movie/list',
    movie: '/movie',
    searchMovie: '/search/movie?query=',
    movieWithGenre: '/discover/movie?with_genres='
}

export {
    baseURL,
    imageURL,
    urls,
    imageOriginalURL
}
import {axiosService} from "./axios.service";
import {urls} from "../config";


const movieService = {
    getPage: (page) => axiosService.get(`${urls.moviePage}${page}`),
    getMovie: (id) => axiosService.get(`${urls.movie}/${id}`),
    searchMovie: (searchValue, page) => axiosService.get(`${urls.searchMovie}${searchValue}&page=${page}`),
    withGenre: (genre, page) => axiosService.get(`${urls.movieWithGenre}${genre}&page=${page}`),
}

export {
    movieService
}
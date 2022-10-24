import {axiosService} from "./axios.service";
import {urls} from "../config";

const genreService = {
    getAll: () => axiosService.get(urls.genres),
}

export {
    genreService
}
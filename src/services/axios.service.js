import axios from "axios";

import {baseURL, imageURL} from "../config";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2NmYmYyZjljNDE2MjIwMzlkNjIxNzMwOTI5ODliOCIsInN1YiI6IjYyMDExNDkyMWU5MjI1MDA0MjU3MWExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ditss3Gma1MI6WVJ2HWvmcGU8vsZLy8px5HXWthHVbA'

const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

const axiosImageService = axios.create({baseURL: imageURL})

export {
    axiosService,
    axiosImageService
}
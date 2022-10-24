import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    movies: [],
    searchList: [],
    movie: null,
    loading: false,
    error: null,
    page: 1,
    totalPages: 500,
    paginationTrigger: 'movieList'
};

const getPage = createAsyncThunk(
    'movieSlice/getPage',
    async ({page}, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await movieService.getPage(page)
            dispatch(movieActions.setTotalPage(data.total_pages))
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getMovie = createAsyncThunk(
    'movieSlice/getMovie',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovie(id)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({searchValue, page}, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await movieService.searchMovie(searchValue, page)
            dispatch(movieActions.setTotalPage(data.total_pages))
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getMovieWithGenres = createAsyncThunk(
    'movieSlice/getMovieWithGenres',
    async ({searchGenre, page}, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await movieService.withGenre(searchGenre, page)
            dispatch(movieActions.setTotalPage(data.total_pages))
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        prevPage: (state, action) => {
            if (state.page > 1) {
                state.page--
            }
        },
        nextPage: (state, action) => {
            if (state.page < state.totalPages) {
                state.page++
            }
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setTotalPage: (state, action) => {
            if (action.payload > 500) {
                state.totalPages = 500
            } else {
                state.totalPages = action.payload
            }
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getPage.pending, (state, action)=> {
                state.loading = true;
            })
            .addCase(getPage.fulfilled, (state, action) => {
                state.paginationTrigger = 'movieList'
                state.movies = action.payload.results
                state.loading = false
            })
            .addCase(getMovie.pending, (state, action)=> {
                state.loading = true;
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.movie = action.payload
                state.loading = false
            })
            .addCase(searchMovie.pending, (state, action)=> {
                state.loading = true;
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.paginationTrigger = 'searchList'
                state.searchList = action.payload.results;
                state.loading = false
            })
            .addCase(getMovieWithGenres.pending, (state, action)=> {
                state.loading = true;
            })
            .addCase(getMovieWithGenres.fulfilled, (state, action) => {
                state.paginationTrigger = 'genreList'
                state.movies = action.payload.results
                state.loading = false
            })
});

const {reducer: movieReducer, actions: {prevPage, nextPage, setPage, setTotalPage}} = movieSlice;

const movieActions = {
    getPage,
    prevPage,
    nextPage,
    setPage,
    getMovie,
    searchMovie,
    setTotalPage,
    getMovieWithGenres
};

export {
    movieReducer,
    movieActions
}
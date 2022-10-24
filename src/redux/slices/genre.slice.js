import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    movieSearchGenres: [],
    genreClassCheckedTrigger: false,
    themeTrigger: true,
    genresToggle: false,
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll()
            return data.genres;
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        changeToggle: (state, action) => {
            state.genresToggle ? state.genresToggle = false : state.genresToggle = true;
        },
        addGenreToFilterList: (state, action) => {
            if (state.movieSearchGenres.includes(action.payload)) {
                const index = state.movieSearchGenres.indexOf(action.payload);
                state.movieSearchGenres.splice(index, 1);
                state.genreClassTrigger = false;
            } else {
                state.movieSearchGenres.push(action.payload)
                state.genreClassTrigger = true;
            }
        },
        themeChanger: (state, action) => {
            state.themeTrigger = !state.themeTrigger;
            state.themeTrigger ? document.body.style.background = '#fff' : document.body.style.background = '#000000';
        }

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.loading = false
            })
})

const {reducer: genreReducer, actions: {changeToggle, addGenreToFilterList, themeChanger}} = genreSlice;

const genreActions = {
    getAll,
    changeToggle,
    addGenreToFilterList,
    themeChanger
};

export {
    genreReducer,
    genreActions
}
import {Navigate, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import {MainLayout} from "./layouts";
import {GenresFilterPage, MovieDetailsPage, MoviesPage, SearchPage} from "./pages";


function App() {
    const {page} = useSelector(state => state.movieReducer);

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={`/movies`}/>}/>
                <Route path={`/movies`} element={<Navigate to={`/movies/${page}`}/>}/>
                <Route path={'movies/:page'} element={<MoviesPage/>}/>
                <Route path={'movieDetails/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'search/name=:movieName&page=:page'} element={<SearchPage/>}/>
                <Route path={'search/withGenres=:searchGenre&page=:page'} element={<GenresFilterPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './MovieList.css'
import { useHistory } from 'react-router';


function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movieList = useSelector(store => store.movieReducer);
    

    const setMovieDetails = (movie) => {
        dispatch({
            type: 'SET_MOVIES',
            payload: movie,
        });
        history.push('/details');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
                <NavLink to='/add'>Add your own movie</NavLink>
            <section className="movies">
                {movieList.map(movie => {
                    return (
                        <div className="singlePoster" key={movie.id}>
                            <h3>{movie.title}</h3>
                            <p> {movie.description}</p>
                            <img src={movie.poster} alt={movie.title} onClick={() => setMovieDetails(movie)} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './MovieList.css'
import { useHistory } from 'react-router';


export default function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movieListReducer);
 
    // used for when clicked on a poster, movie data is recieved 
    // sends us to /details too

    const setMovieDetails = (movie) => {
        dispatch({
            type: 'SET_MOVIE_DETAILS',
            payload: movie,
        });
        history.push('/details');
    }
   
    // when page loads, get all the movies
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    return (
        <main>
            <h1>Movie List</h1>
            <NavLink to='/form'>Add your own movie</NavLink>
            
            <section className="movies">
             
                {movies.map(movie => {
                    return (
                        <div className="singlePoster" key={movie.id}>
                            <img src={movie.poster} alt={movie.title} onClick={() => setMovieDetails(movie)} />
                            <h4>{movie.title}</h4>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}
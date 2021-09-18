import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './MovieList.css'
import { useHistory } from 'react-router';


export default function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movieListReducer);
    // debugger;
    console.log(movies);
    // used for when clicked on a poster, movie data is recieved 
    // sends us to /details too

    const setMovieDetails = (movie) => {
        dispatch({
            type: 'SET_MOVIE_DETAILS',
            payload: movie,
        });
        history.push('/details');
    }
    console.log(movies);
    

    // when page loads, get all the movies
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


console.log(movies);
    return (
        <main>
            <h1>MovieList</h1>
            <NavLink to='/form'>Add your own movie</NavLink>
            
            <section className="movies">
             
                {movies.map(movie => {
                    console.log(movies);
                    return (
                        <div className="singlePoster" key={movie.id}>
                            <h3>{movie.title}</h3>
                            
                            <img src={movie.poster} alt={movie.title} onClick={() => setMovieDetails(movie)} />
                        </div>
                    );
                    console.log(movies);
                })}
            </section>
        </main>

    );
}
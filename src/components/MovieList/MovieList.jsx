import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './MovieList.css'
import { useHistory } from 'react-router';
function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    // function to use the onClick on the div to send user to /description
    let details = () => {
        history.push('/details')
    }
    return (
        <main>
            <h1>MovieList</h1>
                <NavLink to='/AddMovie'>Add your own movie</NavLink>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className="singlePoster" key={movie.id} onClick={details} >
                            <h3>{movie.title}</h3>
                            <p> {movie.description}</p>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

export default function AddMovies() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movieListReducer)
    const genres = useSelector(store => store.genreReducer)
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');

    // sends user back to home page
    let cancel = () => {
        history.push('/')
    }

// saves inputs in the DB and sends user back to home page
    let save = () => {
        history.push('/')
    }

    function addNewMovie(action) {
        console.log('this is the action FOR MOVIE HANDLER!!!:', action);
        dispatch({
            type: 'ADD_MOVIE',
            // needs body because this is a post!
            payload: {
                title: title,
                poster: poster,
                description: description,
                genre: genre
            }
        })
    }

    const handleSubmit = (event) => {
        console.log("Search input is,", title);
        console.log("Search input is,", poster);
        console.log("Search input is,", description);
        event.preventDefault();

        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                title: title,
                poster: poster,
                description: description,
                genre: genre
            }
        })
        // to clear our inputs
        setTitle('');
        setPoster('');
        setDescription('');
    };


    return (
        
        <div>
            <h2>Add a movie!</h2>
            <form onSubmit={handleSubmit}>

            {/* TITLE */}
            <input onChange={(event) => setTitle(event.target.value)}
                required type="text" placeholder="Movie title!" value={title}
            ></input>

            {/* POSTER (url) */}
            <input onChange={(event) => setPoster(event.target.value)}
                required type="text" placeholder="URL for the poster!" value={poster}
            ></input>
     
                {/* DESCRIPTION */}
             
            <input onChange={(event) => setDescription(event.target.value)}
                required type="text" placeholder="Give a description!" value={description}
            ></input>

            {/* GENRE DROPDOWN */}
            {/* <select onChange={event}>
                {genres.map((genre, i) => <option key={i} value={genre.id}>
                    {genre.name}
                </option>)}
            </select> */}

            <button type='submit' value="Submit">Add Movie</button>
            <button onClick={cancel}>Cancel</button>
            <button onClick={save}>Save</button>
            </form>
        </div>
    
        
    );
}
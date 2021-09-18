import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

export default function AddMovies() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movieReducer)
    const genres = useSelector(store => store.genreReducer)
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');

    // sends user back to home page
    let cancel = () => {
        history.push('/')
    }

// saves inputs in the DB and sends user back to home page
    let save = () => {
        history.push('/')
    }

    function movieHandler(action) {
        console.log('this is the action FOR MOVIE HANDLER!!!:', action);
        dispatch({
            type: 'ADD_MOVIE',
            payload: action.payload
        })
    }



    return (
        
        <div>
            {/* TITLE */}
            <input onChange={(event) => setTitle(event.target.value)}
                type="text" placeholder="Movie title" value={title}
            ></input>

            {/* POSTER (url) */}
            <input onChange={(event) => setPoster(event.target.value)}
                type="text" placeholder="URL for the poster!" value={poster}
            ></input>
     
            {/* DESCRIPTION */}
            <input onChange={(event) => setDescription(event.target.value)}
                type="text" placeholder="Give a description!" value={description}
            ></input>

            {/* GENRE DROPDOWN */}
            <select onChange={(event)}>
                {genres.map((genre, i) => <option key={i} value={genre.id}>
                    {genre.name}
                </option>)}
            </select>

            <button onClick={() => movieHandler(movie)}>Add</button>
            <button onClick={cancel}>Cancel</button>
            <button onClick={save}>Save</button>
        </div>
    
        
    );
}
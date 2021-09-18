import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
export default function AddMovies() {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movieReducer)
    const genres = useSelector(store => store.genreReducer)
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');

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
        </div>
    
        
    );
}
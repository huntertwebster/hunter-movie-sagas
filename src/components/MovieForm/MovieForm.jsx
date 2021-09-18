import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

export default function AddMovies() {
    const history = useHistory();
    const dispatch = useDispatch();
    const genres = useSelector(store => store.genreListReducer)
    // const [title, setTitle] = useState('');
    // const [poster, setPoster] = useState('');
    // const [description, setDescription] = useState('');
    // const [genre, setGenre] = useState('');
    const [inputMovie, setInputMovie] = useState({ title: '', poster: '', description: '', genre_id:0 });
    
    // sends user back to home page
    let cancel = () => {
        history.push('/')
    };

// saves inputs in the DB and sends user back to home page
    let save = () => {
        history.push('/')
    };

    const handleSubmit = (event) => {
        // console.log("Title input is:", title);
        // console.log("Poster input is:", poster);
        // console.log("Description input is:", description);
        // console.log("Genre input is:", genre);
        event.preventDefault();

        dispatch({
            type: 'ADD_MOVIE',
            payload: inputMovie    
        })
        setInputMovie('');
    };



    return (
        
        <div>
            <h2>Add a movie!</h2>
            <form onSubmit={handleSubmit}>

            {/* MOVIE */}
                <input onChange={(event) => setInputMovie({ ...inputMovie, title: event.target.value })}
                    type='text' placeholder='Movie title!' value={inputMovie.title} />
                <input onChange={(event) => setInputMovie({ ...inputMovie, poster: event.target.value })}
                    type='text' placeholder='URL for the poster!' value={inputMovie.poster} />
                <input onChange={(event) => setInputMovie({ ...inputMovie, description: event.target.value })}
                    type='text' placeholder='Give a description!' value={inputMovie.description} />
                
            {/* GENRE */}
            <select value={inputMovie.genre_id} onChange={(event)=> setInputMovie({...inputMovie, genre_id:event.target.value})}>
            <option value={"Adventure"}>Adventure</option>
            <option value={"Animated"}>Animated</option>
            <option value={"Biographical"}>Biographical</option>
            <option value={"Comedy"}>Comedy</option>
            <option value={"Disaster"}>Disaster</option>
            <option value={"Drama"}>Drama</option>
            <option value={"Epic"}>Epic</option>
            <option value={"Fantasy"}>Fantasy</option>
            <option value={"Musical"}>Musical</option>
            <option value={"Romantic"}>Romantic</option>
            <option value={"Science Fiction"}>Science Fiction</option>
            <option value={"Space-Opera"}>Space-Opera</option>
            <option value={"Superhero"}>Superhero</option>
            
            </select>
            <button onClick={cancel}>Cancel</button> 
            <button onClick={save} type="submit"  value="Submit">Save</button> 
            </form>
        </div>
    
        
    );
}
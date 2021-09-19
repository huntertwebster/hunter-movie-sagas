import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

export default function AddMovies() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [inputMovie, setInputMovie] = useState({ title: '', poster: '', description: '', genre_id:0 });
    
    // sends user back to home page
    let cancel = () => {
        history.push('/')
    };



    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_MOVIE',
            payload: inputMovie    
        })
        setInputMovie('');
        history.push('/')
    };



    return (
        
        <div>
            <h2>Add a movie!</h2>
            <form onSubmit={handleSubmit}>

            {/* MOVIEs */}
                <input onChange={(event) => setInputMovie({ ...inputMovie, title: event.target.value })}
                    type='text' placeholder='Movie title!' value={inputMovie.title} />
                <input onChange={(event) => setInputMovie({ ...inputMovie, poster: event.target.value })}
                    type='text' placeholder='URL for the poster!' value={inputMovie.poster} />
                <input onChange={(event) => setInputMovie({ ...inputMovie, description: event.target.value })}
                    type='text' placeholder='Give a description!' value={inputMovie.description} />
                
            {/* GENREs */}
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
            <button onClick={handleSubmit} type="submit"  value="Submit">Save</button> 
            </form>
        </div>
    
        
    );
}
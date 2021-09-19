import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";

function MovieForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const genres = useSelector(store => store.genreListReducer)
    // const [title, setTitle] = useState();
    // const [poster, setPoster] = useState();
    // const [description, setDescription] = useState();
    // const [genre, setGenre] = useState();
    const [inputMovie, setInputMovie] = useState({ title: '', poster: '', description: '', genre_id: 0 });
    
    // sends user back to home page
    let cancel = () => {
        history.push('/')
    };

// saves inputs in the DB and sends user back to home page
    // let save = () => {
    //     history.push('/')
    // };

    const handleSubmit = (event) => {
        console.log("Title input is:", inputMovie.title);
        console.log("Poster input is:", inputMovie.poster);
        console.log("Description input is:", inputMovie.description);
        console.log("Genre input is:", inputMovie.genre);
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

            {/* MOVIE */}
                <input onChange={(event) => setInputMovie({ ...inputMovie, title: event.target.value })}
                    type='text' placeholder='Movie title!' value={inputMovie.title} />
                <input onChange={(event) => setInputMovie({ ...inputMovie, poster: event.target.value })}
                    type='text' placeholder='URL for the poster!' value={inputMovie.poster} />
                <input onChange={(event) => setInputMovie({ ...inputMovie, description: event.target.value })}
                    type='text' placeholder='Give a description!' value={inputMovie.description} />
            {/* GENRE */}
            <select value={inputMovie.genre_id} onChange={(event)=> setInputMovie({...inputMovie, genre_id:event.target.value})}>
            <option value={"1"}>Adventure</option>
            <option value={"2"}>Animated</option>
            <option value={"3"}>Biographical</option>
            <option value={"4"}>Comedy</option>
            <option value={"5"}>Disaster</option>
            <option value={"6"}>Drama</option>
            <option value={"7"}>Epic</option>
            <option value={"8"}>Fantasy</option>
            <option value={"9"}>Musical</option>
            <option value={"10"}>Romantic</option>
            <option value={"11"}>Science Fiction</option>
            <option value={"12"}>Space-Opera</option>
            <option value={"13"}>Superhero</option>
            
            </select>
            <button onClick={cancel}>Cancel</button> 
            <button onClick={handleSubmit} type="submit"  value="Submit">Save</button> 
            </form>
        </div>
    
        
    );
}

export default MovieForm;
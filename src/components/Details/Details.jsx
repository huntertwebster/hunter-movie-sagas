import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './Details.css'
export default function Details() {
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(store => store.genres);
    console.log('THIS IS THE MOVIE!!!!!!!:', genres);
    

    let returnHome = () => {
        history.push('/')
    }

// Grab the params from the react router URL hook
   let params = useParams();
   console.log(params);

   // Go hunting for the book by the id that we were given
    let { movieId } = params; // :bookId is set up in App.js
    console.log(movieId);
   let movie = genres.find(movie => movie.id === Number(movieId));
   console.log(`found movie: `, movie);

   // Bail out early with a message if the book isnt found
    if (!movie) {
        return <h2>Invalid Movie ID</h2>;
    }



    return (
        <>
            <h3>Here are the movie details!</h3>
            <h2>{movie?.title}</h2>
            <img className="detailsImg" src={movie?.poster} alt={movie?.title} />
            <p>{movie?.description}</p>
            <p>Genre: {(movie?.genres).join(', ')}</p>
            <button onClick={returnHome}>Back to list</button>
        </>
    );
}
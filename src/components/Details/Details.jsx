import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import './Details.css'
export default function Details() {
    const history = useHistory();
    const movie = useSelector(store => store.movieDetailsReducer);
    const genre = useSelector(store => store.genreListReducer);
        
        
    let returnHome = () => {
        history.push('/')
    }

    return (
        <>
            <h2>{movie.title}</h2>
            <img className="detailsImg" src={movie.poster} alt={movie.title} />
            <p>{movie.description}</p>
            <p>{genre.name}</p>
            <button onClick={returnHome}>Back to list</button>
        </>
    );
}
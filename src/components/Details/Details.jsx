import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export default function Details() {
    const history = useHistory();
    const movie = useSelector(store => store.movieDetailsReducer);
        
        
        
    let returnHome = () => {
        history.push('/')
    }

    return (
        <>
            <h2>{movie.title}</h2>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.description}</p>
            <button onClick={returnHome}>Back to list</button>
        </>
    );
}
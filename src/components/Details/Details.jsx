import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export default function Details() {
    const history = useHistory();
     const movieList = useSelector(store => store.movieReducer);
        
        
        
    let returnHome = () => {
        history.push('/')
    }

    return (
        <>
        <h1>hi! welcome to details!</h1>
            <button onClick={returnHome}>Back to list</button>
        </>
    );
}
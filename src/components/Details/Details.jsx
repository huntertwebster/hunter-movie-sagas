import { useHistory } from "react-router";
export default function Details() {
    const history = useHistory();

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
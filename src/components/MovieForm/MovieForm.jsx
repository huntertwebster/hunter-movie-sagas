import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function MovieForm() {
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const genres = useSelector(store => store.genres);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(`Adding movie`, { title, poster, description, genre });

        dispatch({
            type: 'POST_MOVIE',
            payload: {
                title: title,
                poster: poster,
                description: description,
                genre: genre
            }
        });

        //Redirect user back to homepage
        history.push('/');
    };

    return (
        <>
            <section>
                <h2>Add Movie</h2>
                <form onSubmit={handleSubmit} className="add-movie-form">
                    <input
                        required
                        placeholder="Title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />

                    <input
                        required
                        placeholder="Poster URL"
                        value={poster}
                        onChange={(event) => setPoster(event.target.value)}
                    />

                     <input
                        required
                        placeholder="Description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />

                    <select>
                        {genres.map(genre => (
                            <option
                                key={genre.name}
                                value={genre.name}
                                onChange={() => setGenre(value)}
                            >
                                {genre.name}

                            </option>

                        ))}

                    </select>
                    <button type="submit">
                        Save Movie
                    </button>
                    <button onClick={() => history.push(`/`)}>Cancel</button>
                </form>
            </section>
        </>




    );
}


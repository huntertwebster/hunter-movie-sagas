import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

//SAGAS//


////////////// MOVIES/////////////////////

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all MOVIES:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all MOVIES error');
    }

};

function* addMovie(action) {
    console.log("----Inside the ADD_MOVIE SAGA----", action);
    try {
        yield axios.post('/api/movie', action.payload);
        yield put({ type: 'FETCH_MOVIES' });
    } catch (err) {
        console.log("Error FETCHING MOVIES for post", err);
    }
};

////////////GENRES/////////////////

function* fetchAllGenres() {
    // get all genres from the DB
    try {
        const genres = yield axios.get('/api/genre/all');
        console.log('get all GENRES:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all GENRES error');
    }
};

function* addGenre(action) {
    console.log("----Inside the ADD_GENRE SAGA----", action);
    try {
        yield axios.post('/api/genre', action.payload);
        yield put({ type: 'FETCH_GENRES' });
    } catch (err) {
        console.log("Error FETCHING GENRES for post", err);
    }
};








////////////REDUCERS///////////////////

// const movieDetails = (state = {}, action) => {
//     if (action.type === 'SET_GENRES') {
//         return { ...action.payload };
//     }
//     return state;
// };

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
};


// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
};

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
    yield takeEvery('ADD_GENRE', addGenre);
};

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(

    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);

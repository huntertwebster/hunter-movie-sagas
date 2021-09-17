import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import AddMovies from '../AddMovies/AddMovies';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>

        {/* Movie/Home page */}
        <Route path="/" exact>
          <MovieList />
        </Route>



        {/* Details page */}
        <Route path="/details">
          <Details />
        </Route>


        {/* Add Movie page */}
        <Route path="/add">
          <AddMovies />
        </Route>

      </Router>
    </div>
  );
}


export default App;

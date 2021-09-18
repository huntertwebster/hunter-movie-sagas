import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import MovieForm from '../MovieForm/MovieForm';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>

        {/* MovieList/Home page */}
        <Route path="/" exact>
          <MovieList />
        </Route>



        {/* Details page */}
        <Route path="/details">
          <Details />
        </Route>


        {/* MovieForm page */}
        <Route path="/form">
          <MovieForm />
        </Route>

      </Router>
    </div>
  );
}


export default App;

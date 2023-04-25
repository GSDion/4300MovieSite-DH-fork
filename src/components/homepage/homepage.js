import Movies from './movies';
import Header from '../header';
import { useEffect, useState } from 'react';
import axios from 'axios';

 
var movies;

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/api/items')
      .then(response => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div>
      <Header />
      <div className='movie-grid'>
        <Movies items ={movies} />
      </div>
    </div>
  );
}

export var DUMMY_MOVIES = movies;
export default HomePage;

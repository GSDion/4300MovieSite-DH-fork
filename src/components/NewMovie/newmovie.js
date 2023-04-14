import SecHeader from '../secondheader';
import '../secondheader.css';

import React, { useState } from 'react';
//import Movies from './components/homepage/movies';
import MovieForm from './movieform';

//define onAddMovie function from movieform.js



function NewMovie() {

  const [movies, setMovies] = useState([]);

    const addMovieHandler = (movie) => {
      setMovies((prevMovies) => {
        return [...prevMovies, { ...movie, id: Math.random().toString() }];
      });
    };

    return (
      <div>
        <SecHeader />
        <MovieForm onAddMovie={addMovieHandler} />
      </div>
    );
  }
  
  export default NewMovie;
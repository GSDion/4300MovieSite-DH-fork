import SecHeader from '../secondheader';
import '../secondheader.css';

import React, { useState } from 'react';
import EditMovieForm from './editmovieform';



function EditMovie() {

  const [movies, setMovies] = useState([]);

    const addMovieHandler = (movie) => {
      setMovies((prevMovies) => {
        return [...prevMovies, { ...movie, id: Math.random().toString() }];
      });
    };

    return (
      <div>
        <SecHeader />
        <EditMovieForm onAddMovie={addMovieHandler} />
      </div>
    );
  }
  
  export default EditMovie;
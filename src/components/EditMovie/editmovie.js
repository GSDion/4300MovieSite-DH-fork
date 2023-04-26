import SecHeader from '../secondheader';
import '../secondheader.css';

import React, { useEffect, useState } from 'react';
import EditMovieForm from './editmovieform';
import { movies } from '../homepage/homepage';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function EditMovie() {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  console.log(id);
  console.log(movie)

  useEffect(() => {
    axios.get(`http://localhost:8082/api/items/${id}`)
      .then(response => {
        console.log(response.data);
        setMovie(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);


  return (
    <div>
      <SecHeader />
      <EditMovieForm movie={movie}/>
    </div>
  );
}
  
export default EditMovie;

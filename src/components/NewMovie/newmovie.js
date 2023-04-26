import SecHeader from '../secondheader';
import '../secondheader.css';


import React, { useState, useEffect} from 'react';
//import Movies from './components/homepage/movies';
import MovieForm from './movieform';


//define onAddMovie function from movieform.js
import axios from 'axios';






function NewMovie() {


 const [movies, setMovies] = useState([]);


   const addMovieHandler = (movie) => {
     setMovies((prevMovies) => {
       return [...prevMovies, { ...movie, id: Math.random().toString() }];
     });
   };


 //axios push to homepage
  useEffect(() => {
   axios.get('http://localhost:8082/api/items')
     .then(res => {
       console.log(res);
       setMovies(res.data);
     })
     .catch(err => {
       console.log('Not successful');
     });
 }, []);
    return (
     <div>
       <SecHeader />
       <MovieForm onAddMovie={addMovieHandler} />
     </div>
   );
 }
  export default NewMovie;
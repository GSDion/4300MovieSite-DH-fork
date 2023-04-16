import React from 'react';
import Card from './moviecard';
import './movieitem.css';


import { Link } from 'react-router-dom';
import { DUMMY_MOVIES } from '../homepage/homepage';


function MovieItem(props) {


 const handleDelete = () => {


   let startLength = DUMMY_MOVIES.length
   for (let i = 0; i < startLength; i++) {
     const currmovie = DUMMY_MOVIES.shift()


     if (currmovie.title === props.title) {
       startLength--;
     } else {
       DUMMY_MOVIES.push(currmovie)
     }
   }




 };


 return (
   <Card className="movie-item">
     <img src={props.image} alt={props.title} className="movie-item__image" />
     <div className="movie-item__content">
       <h2 className="movie-item__title">{props.title}</h2>
       <p className="movie-item__rating">Rating: {props.rating}/5 ⭐</p>
     </div>
     <div>
     <button className="movieReview">
       <Link to={`./MovieReview/${props.id}`} className="button">Full Review</Link>
     </button>
     <button onClick={handleDelete} className="movieDelete">
       <Link to="/edit-item" className="button">Edit</Link>
     </button>
     <button onClick={handleDelete} className="movieDelete">
       Delete
     </button>
     </div>
   </Card>
 );
}


export default MovieItem;


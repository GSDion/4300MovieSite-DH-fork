import React from 'react';
import Card from './moviecard';
import './movieitem.css';
import { Link } from 'react-router-dom';
import HomePage, { DUMMY_MOVIES } from '../homepage/homepage';
import {isLoggedIn} from '../header.js';
import axios from 'axios';


function MovieItem(props) {




 const handleDelete = (id) => {
   axios.delete(`http://localhost:8082/api/items/${id}`)
        .then(response => {
            console.log(response);
            // handle successful deletion, e.g. update state
        })
        .catch(error => {
           console.log(props);
           console.log(DUMMY_MOVIES);
            console.log(error);
            // handle error, e.g. display error message
        });
 };


if (isLoggedIn === true) {
 console.log(props)
return (
  <Card className="movie-item">
    <img src={props.image} alt={props.title} className="movie-item__image" />
    <div className="movie-item__content">
      <h2 className="movie-item__title">{props.title}</h2>
      <p className="movie-item__rating">Rating: {props.rating}/5 ⭐</p>
    </div>
    <div>
    <button className="movieReview">
       <Link to={`./MovieReview/${props._id}`} className="button">Full Review</Link>
    </button>     
    <button onClick={() => handleDelete(props._id)} className="movieDelete">
       <Link to="/edit-item" className="button">Edit</Link>
    </button>
    <button onClick={() => handleDelete(props._id)} className="movieDelete">
       <Link to="/confirmation" className="button">Delete</Link> {/** Delete from database too */}
    </button>
    </div>
  </Card>
);
} else {
 return (
 <Card className="movie-item">
    <img src={props.image} alt={props.title} className="movie-item__image" />
    <div className="movie-item__content">
      <h2 className="movie-item__title">{props.title}</h2>
      <p className="movie-item__rating">Rating: {props.rating}/5 ⭐</p>
    </div>
    <div>
    <button className="movieReview">
       <Link to={`./MovieReview/${props._id}`} className="button">Full Review</Link>
    </button>     
    </div>
  </Card>
 )
}
}




export default MovieItem;
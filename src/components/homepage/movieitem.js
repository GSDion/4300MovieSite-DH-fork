import React from 'react';
import Card from './moviecard';
import './movieitem.css';

import { Link } from 'react-router-dom';

function MovieItem(props) {
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
      </div>
    </Card>
  );
}

export default MovieItem;

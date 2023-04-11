import React from 'react';
import Card from './moviecard';
import './movieitem.css';


function MovieItem(props) {
  return (
    <Card className="movie-item">
      <img src={props.image} alt={props.title} className="movie-item__image" />
      <div className="movie-item__content">
        <h2 className="movie-item__title">{props.title}</h2>
        <p className="movie-item__rating">Rating: {props.rating}/5 ⭐</p>
      </div>
    </Card>
  );
}

export default MovieItem;

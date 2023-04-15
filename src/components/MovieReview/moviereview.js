import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header';
import './moviereview.css';


function MovieReview() {
  const { id } = useParams();


  return (
    <div>
      <h1>Movie Review</h1>
      <p>ID: {id}</p>
    </div>
  );
}

export default MovieReview;

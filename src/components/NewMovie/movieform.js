import React, { useState } from 'react';
import Card from './movieformcard';
import './movieform.css';
import '../header.css';
import { DUMMY_MOVIES } from '../homepage/homepage';
import { Link } from 'react-router-dom';
import axios from 'axios';


function MovieForm(props) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [img, setImg] = useState('');

  const newMovie = {
    id: 'm' + (DUMMY_MOVIES.length + 1),
    title: null,
    rating: null,
    image: null
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    newMovie.title = title;
    newMovie.rating = rating;
    newMovie.image = img;

    // axios.post('http://localhost:8082/api/items', newMovie)
    // .then(res => {
    //   props.onAddMovie(res.data);
    //     console.log(res);
    //     setTitle('');
    //     setRating('');
    //     setImg('');
    //     //props.onAddMovie(res.data);
    //     DUMMY_MOVIES.push(newMovie);
    //     navigate('/');
    // })
    // .catch(err => {
    //   console.log('Error in CreateItem!', err);
    // });

    props.onAddMovie(newMovie);
    setTitle('');
    setRating('');
    setImg('');
    DUMMY_MOVIES.push(newMovie);
  }

  return (  
    <Card className='form'>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className='form-control'>
          <label htmlFor='rating'>Rating</label>
          <input type='number' id='rating' min='1' max='5' value={rating} onChange={(event) => setRating(event.target.value)} />
        </div>
        <div className='form-control'>
          <label htmlFor='img'>Image URL</label>
          <input type='text' id='img' value={img} onChange={(event) => setImg(event.target.value)} />
        </div>
        <div className='form-actions'>
          <button className="addmoviebutton" onClick={handleSubmit}><Link to="/">Add Movie</Link></button>
        </div>
      </form>
    </Card>
  );
}

export default MovieForm;

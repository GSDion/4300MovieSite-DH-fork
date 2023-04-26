import React, { useState } from 'react';
import Card from './editmovieformcard';
import './editmovieform.css';
import '../header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function EditMovieForm(props) {
 const temptitle = props.movie.title;
 const temprating = props.movie.rating;
 const tempimg = props.movie.image;


 const [title, setTitle] = useState(temptitle);
 const [rating, setRating] = useState(temptitle);
 const [img, setImg] = useState(temptitle);


 const newMovie = {
   id: 'm' + Math.random().toString(),
   title: null,
   rating: null,
   image: null
 }


 const handleSubmit = (event) => {
   event.preventDefault();
   newMovie.title = title;
   newMovie.rating = rating;
   newMovie.image = img;


   axios.post('http://localhost:8082/api/items', {
     id: newMovie.id, 
     title: newMovie.title,
     rating: newMovie.rating,
     image: newMovie.image
   })
 }


 return ( 
   <Card className='form'>
     <form onSubmit={handleSubmit}>
       <div className='form-control'>
         <label htmlFor='title'>Title</label>
         <input type='text' id='title' value={title} placeholder={title} onChange={(event) => setTitle(event.target.value)} />
       </div>
       <div className='form-control'>
         <label htmlFor='rating'>Rating</label>
         <input type='number' id='rating' min='1' max='5' value={rating} placeholder={rating} onChange={(event) => setRating(event.target.value)} />
       </div>
       <div className='form-control'>
         <label htmlFor='img'>Image URL</label>
         <input type='text' id='img' value={img} placeholder={img} onChange={(event) => setImg(event.target.value)} />
       </div>
       <div className='form-actions'>
         <button className="addmoviebutton" onClick={handleSubmit}><Link to="/">Add Movie</Link></button>
       </div>
     </form>
   </Card>
 );
}


export default EditMovieForm;
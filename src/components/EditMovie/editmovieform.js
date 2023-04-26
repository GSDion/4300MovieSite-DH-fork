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
 const [rating, setRating] = useState(temprating);
 const [img, setImg] = useState(tempimg);


 const newMovie = {
   id: props.movie._id,
   title: null,
   rating: null,
   image: null
 }


 const handleSubmit = (event) => {
   event.preventDefault();
   newMovie.title = title;
   newMovie.rating = rating;
   newMovie.image = img;

   console.log(newMovie.title)
   console.log(newMovie.rating)
   console.log(newMovie.image)
   console.log(newMovie.id)


   axios.put(`http://localhost:8082/api/items/${newMovie.id}`, {
     title: newMovie.title,
     rating: newMovie.rating,
     image: newMovie.image
   })
   .then(response => {
      console.log(response);
   })
   .catch(error => {
    console.log(error);
   })
 }


 return ( 
   <Card className='form'>
     <form onSubmit={handleSubmit}>
       <div className='form-control'>
         <label htmlFor='title'>Title</label>
         <input type='text' id='title' value={title} placeholder={temptitle} onChange={(event) => setTitle(event.target.value)} />
       </div>
       <div className='form-control'>
         <label htmlFor='rating'>Rating</label>
         <input type='number' id='rating' min='1' max='5' value={rating} placeholder={temprating} onChange={(event) => setRating(event.target.value)} />
       </div>
       <div className='form-control'>
         <label htmlFor='img'>Image URL</label>
         <input type='text' id='img' value={img} placeholder={tempimg} onChange={(event) => setImg(event.target.value)} />
       </div>
       <div className='form-actions'>
         <button className="addmoviebutton" onClick={handleSubmit}><Link to="/">Edit Movie</Link></button>
       </div>
     </form>
   </Card>
 );
}


export default EditMovieForm;
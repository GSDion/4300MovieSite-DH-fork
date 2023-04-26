import './App.css';
import NewMovie from './components/NewMovie/newmovie';
import EditMovie from './components/EditMovie/editmovie';
import HomePage from './components/homepage/homepage';
import MovieReview from './components/MovieReview/moviereview';
import Confirmation from './components/Confirmation/confirmation';
import SignUpPage from './components/SignUpPage/signuppage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/homepage/errorpage';
import UserContext from './backend/context/UserContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function App() {

  //userContext data, wrap routes in UserContext as instructed in "Authentification with JWT" handout
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
  <UserContext.Provider value={{ userData, setUserData }}>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/confirmation" element={<Confirmation />}></Route>
          <Route exact path="/add-item" element={<NewMovie />}></Route>
          <Route exact path="/edit-item/:id" element={<EditMovie />}></Route>
          <Route exact path="/movieReview/:id" element={<MovieReview />}></Route>
          <Route exact path="/signup" element={<SignUpPage />}></Route> 
          <Route exact path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </div>
    </Router>
   </UserContext.Provider>
 );
}


export default App;

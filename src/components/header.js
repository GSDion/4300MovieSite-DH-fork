import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';


function Header() {
  let isLoggedIn = true;  
  
  if (isLoggedIn) {
    return (
    <header className="header">
      <div className="header__logo">
        <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="logo" />
      </div>
      <h1 className="header__title">DCC Movie Reviews</h1>
      <h2 className="welcome">Welcome!</h2> 
      <button className="addmoviebutton">
        {/* Need to make sure this works */ }
        <Link to="/add-item" className="button">Add Movie</Link>
      </button>
    </header>
  );
} else {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="logo" />
      </div>
      <h1 className="header__title">DCC Movie Reviews</h1>
      <div className="loginsection"> 
        <label for="username">Username</label>
        <input type="text" placeholder="Enter Username" name="username" required></input>
        <label for="password">Password</label>
        <input type="text" placeholder="Enter Password" name="password" required></input>
        <button id="loginbutton">Login</button>
      </div>
    </header>
  );
}
}

export default Header;

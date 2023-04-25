import './header.css';
import React, { useState } from 'react';
import Bcrypt from 'bcryptjs';
import axios from 'axios';

import { Link } from 'react-router-dom';

export const isLoggedIn = false;



function Header() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //const axios = require('axios');

  const login = {
    username: null,
    login: null
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login.username = username;
    login.password = password;
    setUsername('');
    setPassword('');
    const hashedUsername = Bcrypt.hashSync(login.username, 10);
    const hashedPassword = Bcrypt.hashSync(login.password, 10);
    // search for hash in the database and see if there is a match.
    // if not
    axios.post('/', {
      username: hashedUsername,
      password: hashedPassword
    })
  }
  
  if (isLoggedIn) {
    return (
    <header className="header">
      <div className="header__logo">
        <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="logo" />
      </div>
      <h1 className="header__title">DCC Movie Reviews</h1>
      <h2 className="welcome">Welcome!</h2> 
      <button className="addmoviebutton">
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
      <form onSubmit={handleSubmit}>
        <label for="username">Username</label>
        <input type="text" placeholder="Enter Username" id="username" value={username} onChange={(event) => setUsername(event.target.value)} required></input>
        <label for="password">Password</label>
        <input type="text" placeholder="Enter Password" min='6' value={password} onChange={(event) => setPassword(event.target.value)} required></input>
        <button id="loginbutton" onClick={handleSubmit}>Login</button>
        <button id="signupbutton"><Link to="/signup">Sign Up</Link></button>
      </form>
      </div>
    </header>
  );
}
}

export default Header;

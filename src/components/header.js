import './header.css';
import React, { useContext, useState } from 'react';
import Bcrypt from 'bcryptjs';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { signedUp } from './SignUpPage/signuppage.js';
import { createContext } from 'react';
import UserContext from "../backend/context/UserContext"
 

export let isLoggedIn = false;

function Header() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { setUserData } = useContext(UserContext);

  if (signedUp & !(localStorage.getItem("auth-token") === '')) {
    isLoggedIn = true;
  }

  const login = {
    username: null,
    login: null
  }

  const logout = () => {
    localStorage.setItem('auth-token', '');
    setUserData({ token: undefined, user: undefined });
    isLoggedIn = false;
  };

  
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const loginUser = { username, password };
      const loginRes = await axios.post("http://localhost:8082/api/users/login", loginUser)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      isLoggedIn = true;
    } catch (err) {
      setLoading(false);
      isLoggedIn = false;
      err.response.data.msg && setError(err.response.data.msg)
    }
  }



  if (isLoggedIn) {
    return (
    <header className="header">
      <div className="header__logo">
        <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="logo" />
      </div>
      <h1 className="header__title">DCC Movie Reviews</h1>
      <h2 className="welcome">Welcome!</h2>
      <div>
        <button className="logout-button" onClick={logout}>Logout</button> 
        <button className="addmoviebutton">
          <Link to="/add-item" className="button">Add Movie</Link>
        </button>
      </div>
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
        <button id="loginbutton" onClick={handleSubmit}><Link to="/">Login</Link></button>
        <button id="signupbutton"><Link to="/signup">Sign Up</Link></button>
      </form>
      {error && <div className="error-message">{error}</div>}
      </div>
    </header>
  );
}
}

export default Header;

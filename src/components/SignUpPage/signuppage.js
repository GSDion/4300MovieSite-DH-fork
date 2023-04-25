import SecHeader from "../secondheader";
import Card from "../NewMovie/movieformcard";
import React, { useState } from 'react';
import Bcrypt from 'bcryptjs';
import axios from 'axios';



function SignUpPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //const axios = require('axios');

    const login = {
        username: null,
        password: null,
        confirmPassword: null
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login.username = username;
        login.password = password;
        login.confirmPassword = confirmPassword;
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        if (login.password.value === login.confirmPassword.value) { 
        // condition check also needed to see if hash currently exists in the database.
        axios.post('/signup', {
            username: Bcrypt.hashSync(login.username, 10),
            password: Bcrypt.hashSync(login.password, 10) 
        })}
    }

    return(
        <div>
        <SecHeader />
        <Card>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter a username..." required></input>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" min='6' value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter a password..." required></input> 
            </div>
            <div className="form-control">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input type="password" id="confirmPassword" min='6' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm your password..." required></input>    
            </div> 
            <div className="form-actions">
                <button className="signupbutton" onClick={handleSubmit}>Sign Up</button>
            </div>
        </form>
        </Card>
        </div>
    )
}

export default SignUpPage;
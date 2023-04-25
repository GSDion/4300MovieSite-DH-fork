import SecHeader from "../secondheader";
import Card from "../NewMovie/movieformcard";
import React, { useState } from 'react';
import Bcrypt from 'bcryptjs';
import axios from 'axios';
import { Link } from 'react-router-dom';

export let signedUp = false;

function SignUpPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const signup = {
        username: null,
        password: null,
        confirmPassword: null
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signup.username = username;
        signup.password = password;
        signup.confirmPassword = confirmPassword;
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        if (signup.password === signup.confirmPassword) { 
        axios.post('http://localhost:8082/api/users', {
            username: Bcrypt.hashSync(signup.username, 10),
            password: Bcrypt.hashSync(signup.password, 10),
        })
        signedUp = true;
    }
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
                <button className="signupbutton" onClick={handleSubmit}><Link to="/">Sign Up</Link></button>
            </div>
        </form>
        </Card>
        </div>
    )
}

export default SignUpPage;
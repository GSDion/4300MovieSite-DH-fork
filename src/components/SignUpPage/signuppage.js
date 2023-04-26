import SecHeader from "../secondheader";
import Card from "../NewMovie/movieformcard";
import React, { useState, useContext } from 'react';
import Bcrypt from 'bcryptjs';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserContext from "../../backend/context/UserContext";

export let signedUp = false;

function SignUpPage() {

    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const { setUserData } = useContext(UserContext);
    
    const signup = {
        username: null,
        password: null,
        confirmPassword: null
    }



    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {

            const newUser = { username, password, confirmPassword };
            await axios.post("http://localhost:8082/api/users/signup", newUser);
            const loginUser = { username, password };
            const loginRes = await axios.post("http://localhost:8082/api/users/login", loginUser)
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });

            localStorage.setItem("auth-token", loginRes.data.token);
            setLoading(false);
            signedUp = true;
            navigate('/');
        } catch (err) {
            if (err.response.status === 500) {
                const loginUser = { username, password };
                const loginRes = await axios.post("http://localhost:8082/api/users/login", loginUser)
                setUserData({
                    token: loginRes.data.token,
                    user: loginRes.data.user,
                });

                localStorage.setItem("auth-token", loginRes.data.token);
                setLoading(false);
                signedUp = true;
                navigate('/');
            } else {
                setLoading(false);
                err.response.data.msg && setErrorMessage(err.response.data.msg);
            }
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
                <button className="signupbutton" onClick={handleSubmit}>Sign Up</button>
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
        </Card>
        </div>
        
    )
}

export default SignUpPage;
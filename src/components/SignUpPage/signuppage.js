import SecHeader from "../secondheader";
import Card from "../NewMovie/movieformcard";


function SignUpPage() {
    return(
        <div>
        <SecHeader />
        <Card>
            <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Enter a username..." required></input>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter a password..." required></input> 
            </div>
            <div className="form-control">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input type="password" placeholder="Confirm your password..." required></input>    
            </div> 
            <div className="form-actions">
                <button className="signupbutton">Sign Up</button>
            </div>
        </Card>
        </div>
    )
}

export default SignUpPage;
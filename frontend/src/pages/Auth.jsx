import { Link } from "react-router-dom";

function Auth(){
    return (
        <>
            <h1>Welcome to Shoprithm</h1>
            <Link to="/signin">Login</Link> | <Link to="/signup">Signup</Link>
        </>
    )
}


export default Auth;
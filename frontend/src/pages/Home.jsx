import { useContext, useEffect } from "react";
import { AuthUsercontext } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";


function Home() {

  const { token,user } = useContext(AuthUsercontext);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!token){
      navigate('/');
    }
  },[token,navigate])

  return (
      <div>
        <h1>Welcome to Shoprithm 🛒</h1>
        {user ? (
          <p>You are logged in as <strong>{user.username}</strong>!</p>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    );
  }
  
  export default Home;
import { useContext, useEffect } from "react";
import { AuthUsercontext } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";


function Home() {

  const { token,user,signOut } = useContext(AuthUsercontext);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!token){
      navigate('/');
    }
  },[token,navigate])

  const handleLogout =()=>{
    signOut();
    navigate('/');
  }

  return (
      <div>
        <h1>Welcome to Shoprithm 🛒</h1>
        {user ? (
          <p>You are logged in as <strong>{user.username}</strong>!</p>
        ) : (
          <p>Loading user data...</p>
        )}
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  
  export default Home;
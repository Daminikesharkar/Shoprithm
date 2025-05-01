import { createContext, useEffect, useState } from "react"
import axios from "axios";

export const AuthUsercontext = createContext();

function Authcontext(props){
    const [token,setToken] = useState(() => localStorage.getItem("token") || null);
    const [user,setUser] = useState(null);

    useEffect(()=>{
        const fetchUser = async () => {
            if (token && !user) {
              try {
                const res = await axios.get("http://localhost:3000/currentUser", {
                  headers: {
                    Authorization: token,
                  },
                });
                console.log(res)
                setUser(res.data.user);
              } catch (err) {
                setToken(null); 
                localStorage.removeItem("token");
              }
            }
          };
        fetchUser();
    },[token])


    const signIn = (token,userData)=>{
        setToken(token);
        setUser(userData);
    }

    const signOut = ()=>{
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    }

    return (
        <AuthUsercontext.Provider value={{token,user,signIn,signOut}}>
            {props.children}
        </AuthUsercontext.Provider>
    )
}

export default Authcontext
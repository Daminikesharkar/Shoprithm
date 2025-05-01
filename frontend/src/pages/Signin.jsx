import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthUsercontext } from "../context/Authcontext";

function Signin(){
    const { signIn } = useContext(AuthUsercontext);

    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        setFormdata((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/signIn',formdata);
            alert(response.data.message);
            localStorage.setItem('token',response.data.token);
            signIn(response.data.token,response.data.user);
            navigate('/home')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1>Signin Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email"  placeholder="Email" name="email" value={formdata.email} onChange={handleChange} required/>
                <input type="text" placeholder="Password" name="password" value={formdata.password} onChange={handleChange} required/>

                <button type="submit">Login</button>
                 
            </form>
        </>
    )
}

export default Signin;
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(){
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        username:"",
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        setFormdata((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/signUp',formdata);
            alert(response.data.message || "Signup successful!");
            navigate('/signin')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1>Signup Page</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <input type="text"  placeholder="Username" name="username" value={formdata.username} onChange={handleChange} required/>
                <input type="email" placeholder="Email" name="email" value={formdata.email} onChange={handleChange} required/>
                <input type="text" placeholder="Password" name="password" value={formdata.password} onChange={handleChange} required/>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Signup;
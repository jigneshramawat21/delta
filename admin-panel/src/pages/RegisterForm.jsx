import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';


function RegisterForm(){

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [error,setErrors]= useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const res = await axios.post('http://localhost:5000/api/admin/register',{email , password})
            
            navigate('/login');

        }
        catch(err){
            console.log(err);
            alert(err);
            setErrors(err.response.data.error);
        }
       
    }
    return(
        <>
        <div className="container">
            <h2>Admin Register </h2>

            <form onSubmit={handleSubmit}>
                <input type="email" value={email} placeholder='Email Enter' required className='form-control ' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" value={password} placeholder='Password Enter' required className='form-control mt-3' onChange={(e)=>setPassword(e.target.value)}/>
                <button className="btn btn-primary mt-3" type="submit">Register</button>

                {error && <p className="text-danger mt-2">{error}</p>}
            </form>
        </div>
        </>
    )
}
export default RegisterForm;
    
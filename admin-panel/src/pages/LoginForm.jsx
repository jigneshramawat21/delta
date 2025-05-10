import React, {useState}    from 'react';
import axios, { HttpStatusCode } from 'axios';
import {Link, useNavigate} from 'react-router-dom';   



function LoginForm() {

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [error, setErrors]= useState('');

    const navigate = useNavigate();
  

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{

            const res = await axios.post('http://localhost:5000/api/admin/login', { email, password });
            
            ;

            
            localStorage.setItem('token', res.data.token);
            navigate('/admin-dashboard');

        }
        catch(err){
            console.log(err);
            setErrors(err.response.data.error);
        }
    }
  return (
    <>
    <div className="container">
        <h3>Login Admin</h3>

        <form onSubmit={handleSubmit}>
            
            <input type="email" value={email} placeholder='Email Enter' required className='form-control' onChange={ (e)=> setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder='Password Enter' required className='form-control mt-3' onChange={ (e)=> setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
            <Link className='ps-5 pt-1 text-white' to="/RegisterForm" >register</Link>
            {error && <p className="text-danger mt-2">{error}</p>}
        </form>
    </div>
    </>
  );
}
export default LoginForm;

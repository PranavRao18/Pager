import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  var [form, setForm] = useState({});  
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm({
        ...form,
        [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    const {data} = await axios.post('http://localhost:3000/auth/login', form);
    if(data.error){
      alert(data.error);
    } else {
      setForm({});
      alert('Login Successdul');
      navigate('/hero');
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <input type='email' placeholder='email' name='email' onChange={handleChange}/>            
            <input type='password' placeholder='password' name='password' onChange={handleChange}/>    
            <button type='submit' className='bg-white text-black'>SUBMIT</button>        
        </form>
    </div>
  )
}

export default Login

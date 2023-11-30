import { LineAxisOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  var [form, setForm] = useState({});  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm({
        ...form,
        name: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    const response = await axios.post('http://localhost/3000', form);
    if(response.status === 200){

    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <input type='email' placeholder='email' onChange={handleChange}/>            
            <input type='password' placeholder='password' onChange={handleChange}/>    
            <button type='submit' className='bg-white text-black'>SUBMIT</button>        
        </form>
    </div>
  )
}

export default Login

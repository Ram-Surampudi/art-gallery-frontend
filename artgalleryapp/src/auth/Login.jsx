
import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/register.css';
import {toast , Toaster} from 'react-hot-toast';
import { Arr, URL } from '../App';
import Loading, { startLoading, stopLoading } from './Loading';

const Login = () => {
  const [data , setdata] = useState({});

  const [navItems,setArr] = useContext(Arr);

  useEffect(()=>{
    localStorage.setItem('token', 'random');
      setArr(['login', 'register']);
  },[]);
  const navigate = useNavigate();

  const set = e => setdata({...data,[e.target.name] : e.target.value});

  const submitData = async(e) =>{
    startLoading()
    e.preventDefault();

    try{
      var response = await axios.post(`${URL}/user/login`, data);
      localStorage.setItem('user', response.data.id);
      navigate(response.data.role === 'user' ? '/home' : '/admin');
    }
    catch(error){
      toast.error(error.response.data.message);
      if(error.status != 404)
        navigate('/verify/' + error.response.data.id);
    }
    stopLoading();
  }

  return (
         <div className='login-page'>
          <Toaster/>
          <div className='login-entry-div'>
      <h1 className='login-h1'>Login</h1>
      <form className='form-class-addhotel' onSubmit={submitData}>
          <input type='text' className='addhotel-input login-input' name='username' placeholder='Username' onChange={set} required />
            <input type='password' className='addhotel-input login-input' name='password' placeholder='Password' onChange={set} required />
            <a className='login-a-tag' href='/register'>Not register ? </a>
          <br></br>
          <input type='submit' className='addhotel-input save' value='Login' />
      </form>
          </div>
    </div>
  );
}

export default Login

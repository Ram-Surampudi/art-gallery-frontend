import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/register.css';
import {toast , Toaster} from 'react-hot-toast';
import { Arr, URL } from '../App';
import GenerateUrl from '../user/GenerateUrl';
import { startLoading, stopLoading } from './Loading';


const  Register = () => {
  const [, setarr] = useContext(Arr);
  const navigate = useNavigate();
  const [data , setdata] = useState({});
  const [cpassword , setCpass] = useState('');
  const [img , setimg] = useState(null);

  useEffect(() => {
    setarr(['login', 'register']);
  }, []);


  const set = e =>setdata({...data,[e.target.name] : e.target.value});

  const submitData = async (e) => {
    e.preventDefault();
    startLoading();
      if(cpassword !==  data.password){
        toast.error("check the password");
        stopLoading();
        return;
      }

      try{
        data['url'] = img ? await GenerateUrl(img) : '';
        var res = await axios.post(`${URL}/user`, data);
        navigate('/verify/' + res.data.message);
      }
      catch(error){
        stopLoading();
        toast.error(error.response.data.message);
      }
      stopLoading();
}


  return (
    <div className='addhotel-div verifcation-div'>
      <Toaster/>
      <h1 className='login-h1' style={{textAlign:'left', color:'#000'}}>Register</h1>
      <form className='form-class-addhotel' onSubmit={submitData}>
          <div className='flex-div'>
            <input type='text' className='addhotel-input' name='firstName' style={{width:"24%"}} placeholder='First Name' onChange={set} required />
            <input type='text' className='addhotel-input' name='lastName' style={{width:"24%"}} placeholder='Last Name' onChange={set} required />
          </div>
          <input type='text' className='addhotel-input' name='username' placeholder='Username' onChange={set} required />
          <div className='flex-div'>
            <input type='password' className='addhotel-input' name='password' style={{width:"24%"}} placeholder='Password' onChange={set} required />
            <input type='password' className='addhotel-input' name='cpassword' style={{width:"24%"}} placeholder='Confirm Password' onChange={(e)=>setCpass(e.target.value)} required />
          </div>
          <label style={{display:'block', marginLeft:'20px'}}>Profile picture (optional)</label>
          <input type='file' className='addhotel-input' name='img' onChange={e => setimg(e.target.files[0])} /><br></br>
          <input type='submit' className='addhotel-input save' value='Register' />
      </form>
    </div>
  );
}

export default Register;

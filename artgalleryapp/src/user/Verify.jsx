import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading, { startLoading, stopLoading } from '../auth/Loading';
import {toast , Toaster} from 'react-hot-toast';
import { Arr, URL } from '../App';

const Verify = () => {
    const [, setarr] = useContext(Arr);
    const navigate = useNavigate();
    const [data , setdata] = useState({});

    useEffect(() => {
      setarr(['login', 'register']);
    }, []);

    const set = e =>setdata({...data,[e.target.name] : e.target.value});

    let param = useParams();

    const submitData = async (e) =>{
        e.preventDefault();
        startLoading();
        try{
            data['id'] = param.id;
            var res = await axios.post(`${URL}/user/verify`, data);
            startLoading();
            navigate('/login');
          }
          catch(error){
            stopLoading();
            toast.error(error.response.data.message);
          }
          stopLoading();
    }

    const sendOTP = async ()=>{
      startLoading();
        data['otp'] = '';
        data['id'] = param.id;
        try{
            data['id'] = param.id;
            var res = await axios.post(`${URL}/user/verify`, data);
            toast.success('otp sent...');
          }
          catch(error){
            console.log(error.response);
            toast.error(error.response.data.message);
          }
          stopLoading();
    }


  return (
    <div className='addhotel-div verifcation-div'>
      <Toaster/>
    <h1 className='login-h1' style={{textAlign:'left', color:'#000'}}>Verification</h1>
        <form className='form-class-addhotel' onSubmit={submitData}>
            <input type='email' className='addhotel-input' name='email' placeholder='Email Id' onChange={set} required />
            <div className='flex-div' >
            <input type='text' className='addhotel-input' name='otp' style={{width:"24%"}} placeholder='OTP' onChange={set} required />
            <input type='button' className='addhotel-input save' value='Get OTP' onClick={sendOTP} />
            </div>
            <input type='submit' className='addhotel-input save' value='Verify' />
            </form>
    </div>
  )
}

export default Verify

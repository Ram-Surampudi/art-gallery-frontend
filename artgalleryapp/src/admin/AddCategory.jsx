
import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/register.css';
import GenerateUrl from '../user/GenerateUrl.js';
import { Arr, URL } from '../App.js';
import { startLoading, stopLoading } from '../auth/Loading.jsx';

const AddCategory = () => {

  const [navItems,setArr] = useContext(Arr);

  useEffect(()=>{
    setArr(['admin', 'addart', 'addcategory', 'logout']);
},[]);
    const navigate = useNavigate();
    const [data , setdata] = useState({});
    const [img , setimg] = useState(null);

    const set = e =>setdata({...data,[e.target.name] : e.target.value});

    const submitData = async (e) => {
        e.preventDefault();
        startLoading();
          try{
            data['url'] = img ? await GenerateUrl(img) : '';
            var res = await axios.post(`${URL}/category`, data);
            stopLoading();
            navigate('/admin');
          }
          catch(error){
            // toast.error(error.response.data.message);
            console.log(error);
          }
          stopLoading();
    }

  return (
    <div className='addhotel-div verifcation-div'>
      <h1 className='login-h1' style={{textAlign:'left', color:'#000'}}>Add Category</h1>
      <form className='form-class-addhotel' onSubmit={submitData}>
            <input type='text' className='addhotel-input' name='category' placeholder='category' onChange={set} required />
          <label style={{display:'block', marginLeft:'20px'}}>Category picture </label>
          <input type='file' className='addhotel-input' name='img' onChange={e => setimg(e.target.files[0])} /><br></br>
          <input type='submit' className='addhotel-input save' value='Add Category' />
      </form>
    </div>
  )
}

export default AddCategory

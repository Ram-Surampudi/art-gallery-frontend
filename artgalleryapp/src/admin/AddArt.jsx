
import React, {useContext, useEffect, useState} from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/register.css';
import GenerateUrl from '../user/GenerateUrl.js';
import { Arr, URL } from '../App.js';
import { startLoading, stopLoading } from '../auth/Loading.jsx';
import toast from 'react-hot-toast';

const AddArt = () => {

  const params = useParams();
  const Data = params.Data ? JSON.parse(decodeURIComponent(params.Data)) : null;

  const [navItems,setArr] = useContext(Arr);
  const navigate = useNavigate();
  const [data , setdata] = useState(Data|| {});
  const [img , setimg] = useState(null);
  const [popup, setpopup] = useState(false);

  const openPopUp = () => setpopup(true);
  const closePopUp = () => setpopup(false);

  useEffect(()=>{
    setArr(['admin', 'arts' , 'addart', 'addcategory', 'logout']);
    },[]);


    const set = e =>setdata({...data,[e.target.name] : e.target.value});

    const submitData = async (e) => {
        e.preventDefault();
        startLoading();
          try{
            if(Data == null || img)
              data['url'] = await GenerateUrl(img);
            console.log(data);
            var res = await axios.post(`${URL}/art`, data);
            navigate('/arts');
          }
          catch(error){
            toast.error(error.response.data.message);
          }
          stopLoading();
    }


    const deleteArt = async() =>{
      closePopUp();
      startLoading();
      try{
        await axios.delete(`${URL}/art/`+ Data.id);
        // toast.success("successfully delete")
        navigate('/arts')
      }
      catch(error){
        console.log(error);
      }
      stopLoading();
    }

  return (
    <div className='addhotel-div admin-art-div'>
      <div className={'popwindow ' + (popup ? 'open-window' :'')}>
            <p>Are you Sure to Remove Item</p>
            <button className='btn cancel-button' onClick={closePopUp} >Cancel</button>
            <button className='btn btn-danger cart-button' onClick={deleteArt} >Remove</button>
        </div>
      <h1 className='login-h1' style={{textAlign:'left', color:'#000'}}>{Data ? "Update Art" : "Add Art"}</h1>
      <form className='form-class-addhotel' onSubmit={submitData}>
            <input type='text' className='addhotel-input' name='name' placeholder='Art Name' onChange={set} value={data?.name ? data.name : ''} required />
            <input type='text' className='addhotel-input' name='artistName' placeholder='Artist Name' onChange={set} value={data?.artistName ? data.artistName : ''} required />
            <input type='text' className='addhotel-input' name='cost' placeholder='cost' onChange={(e)=>setdata({...data,[e.target.name] : parseInt(e.target.value)})}  value={data?.cost ? data.cost : ''}required />
            <input type='text' className='addhotel-input' name='category' placeholder='category' onChange={set} value={data?.category ? data.category : '' } required />
            <input type='text' className='addhotel-input' name='description' placeholder='description' onChange={set} value={data?.description ? data.description : '' } required />
          <label style={{display:'block', marginLeft:'20px'}}>Category picture </label>
          <input type='file' className='addhotel-input' name='img' onChange={e => setimg(e.target.files[0])} /><br></br>
          {Data ?
          <div>
            <input type='submit' className='btn btn-warning mr-3' value={'UPDATE ART'} style={{margin:'10px', fontSize:'20px'}} />
            <input type='button' className='btn btn-danger' style={{margin:'10px', fontSize:'20px'}} value={'DELETE'} onClick={openPopUp} />
          </div>
          :
          <input type='submit' className='addhotel-input save' value={'Add Art'} />
          
        }
      </form>
    </div>
  )
}

export default AddArt;

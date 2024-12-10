import React, { useContext, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import '../css/AdminHome.css';
import '../css/popupwindow.css';
import { Arr, URL } from '../App.js';
import { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { startLoading, stopLoading } from '../auth/Loading.jsx';

const AdminHome = () => {

  var id ;
  const [navItems,setArr] = useContext(Arr);
  const [arr, setarr] = useState([]);
  const [categorys, setcategory] = useState([]);
  const [search , setSearch] = useState('');

  const nagivate = useNavigate();
  const [popup, setpopup] = useState(false);

  const closePopUp = () => setpopup(false);
  const openPopUp = (e) => {
    id = e.target.name;
    setpopup(true);
  }
  
  useEffect(()=>{
      setArr(['admin','arts' , 'addart', 'addcategory', 'logout']);
      renderCategories();
      // renderArts();
  },[]);

  const renderCategories = async () =>{
    startLoading();
    try{
      var response = await axios.get(`${URL}/category`);
      setcategory(response.data);
    }
    catch(error){
      console.log(error);
    }
    stopLoading();
  }

  const deleteArt = async() =>{
    startLoading();
    closePopUp();
    try{
      await axios.delete(`${URL}/art/`+ id);
      toast.success("successfully delete")
      // renderArts();
    }
    catch(error){
      console.log(error);
    }
    stopLoading();
  }


  return (
    <div style={{marginTop:"9rem"}}>
      <Toaster/>
      <div className='search-div'>
      <input type="search" name="search" style={{width:'30%'}} className="addhotel-input login-input" placeholder='Category Name' onChange={e=>setSearch(e.target.value)}/>
      <input type="button" value="Search" className='addhotel-input save' />
      </div>
      <div className='category-container-low'>
      {categorys?.filter(item => {return search === '' ? item : item?.category.toLowerCase().includes(search)}).map(item=>(
        <div class='art-div div-cat-op'>
        <img class='arts-image' src={item?.url} alt='not found url' />
              <div class="cat-img-black"></div>
            <h3 style={{"text-decoration" : "none"}} class='artist-name-h1'>{item?.category}</h3>
            </div>
      ))}
      </div>
    </div>
  )
}

export default AdminHome

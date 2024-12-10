import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../css/artu.css';
import Category from './Category.jsx';
import { startLoading, stopLoading } from '../auth/Loading.jsx';
import toast from 'react-hot-toast';
import { removeFromCart } from './cartFiles.js';
import '../css/popupwindow.css';
import { URL } from '../App.js';

const Art = () => {

  let param = useParams();

  const [art, setart] = useState(null);
  const [itemInCart, setItemInCart] = useState(false);
  const [popup, setpopup] = useState(false);

  const openPopUp = () => setpopup(true);
  const closePopUp = () => setpopup(false);

  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0,0);
    renderArt()},[]);

  const renderArt = async () =>{
    startLoading();
    try{
      var data = {user_id : localStorage.getItem('user') , art_id : param.id}
      var response = await axios.post(`${URL}/art/singleArt`, data);
      console.log(response.data);
      
      setart(response.data);
      setItemInCart(response.data?.presetInCart);
    }
    catch(error){
      console.log(error);
    }
    stopLoading();
  }

  const removeFromCartItems = async() =>{
    closePopUp();
    startLoading();
      await removeFromCart(param.id);
      renderArt();
      stopLoading();
      toast.error("removed from cart");
      setItemInCart(false);
  }

  const addToCart = async () =>{
    if(itemInCart)
      return ;
    startLoading();
      var data = {art_id : param.id, user_id : localStorage.getItem('user')}
      try {
        let response = await axios.post(`${URL}/user/cart`, data);
        toast.success(response.data.message);
      }
      catch(error){
        toast.error(error.response.data.message);
      }
      stopLoading();
      setItemInCart(true);
  }

  return (
    <div className='arts-shop-main-div' style={{maxWidth:"90%",margin:"auto"}}>
      <div className={'popwindow ' + (popup ? 'open-window' :'')}>
            <p>Are you Sure to Remove Item from Cart</p>
            <button className='btn cancel-button' onClick={closePopUp} >Cancel</button>
            <button className='btn btn-danger cart-button' onClick={removeFromCartItems} >Remove</button>
        </div>
      <div className="card-container-overall d-flex">
          <div>
            <img src= {art?.url} className='art-page-image'></img>
          </div>

          <div className="side-card-container">
            <h1 className='card-heading'>{art?.name?.toUpperCase()}</h1>
            <p  className='card-artist-name'> &#8618;Artist : {art?.artistName}</p>
            <p className='card-artist-description'>{art?.description}</p>
            <p className='card-cost-btn'>Cost : ₹{art?.cost}</p>
            {itemInCart ? 
                <button className='btn btn-lg add-to-cart-button btn-danger' onClick={openPopUp}>Remove From Cart</button> :
                <button className='btn btn-lg add-to-cart-button btn-success' onClick={addToCart}>Add To Cart</button>}
                {art?.soldOutArt ?
            <button className='btn btn-danger btn-lg' >Sold Out</button>  :
            <button className='btn btn-warning btn-lg' onClick={()=>navigate("/buy/"+art.id)}>Buy now</button> 
                }
          </div>
     </div>
     <h3 className='spacebetween' style={{marginBottom:"3rem"}}> Explore Some more Categories </h3>
     <Category/>
    </div>
  )
}

export default Art

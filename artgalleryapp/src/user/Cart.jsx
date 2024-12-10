import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/cart.css';
import{ startLoading, stopLoading } from '../auth/Loading';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from './cartFiles';
import { URL } from '../App';

const Cart = () => {

  const [cart, setcart] = useState(null);

  useEffect(()=>{
    renderCart();
    },[]);

    const nagivate = useNavigate();

  const renderCart = async () =>{
    startLoading();
    try{
      var response = await axios.get(`${URL}/user/cart/` + localStorage.getItem('user'));
      setcart(response.data);
    }
    catch(error){
      console.log(error);
    }
    stopLoading();
  }

  const removeFromCartItems = async(id) =>{
    startLoading();
      await removeFromCart(id);
      stopLoading();
      renderCart();
      toast.success("removed from cart");
  }


  return (
    <div style={{marginTop:"8rem"}}>
      <div className='cart-item-inside'> 
        <h5 className='cart-h5'>Cart Items:</h5>
        { cart?.length === 0 &&
        <div className='ifCartIsEmpty'>
          <h1>Cart is Empty Add item to Cart</h1>
        </div>
        }
        {cart?.map((item)=>(
          <div class="card w-50 cart-item-div">
            <div onClick={()=>nagivate('/art/'+item?.id)} >
              <img src={item.url}  className='cart-img' ></img>
              </div>
            <div class="card-body" onClick={()=>nagivate('/art/'+item?.id)}>
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">Cost : ₹{item.cost}</p>
          </div>
              <div className='cart-button-css d-flex'>
              {item.soldOutArt ?
              <button href="#" class="btn btn-danger cart-button m-2" >Sold Out</button> :
              <button href="#" class="btn btn-warning cart-button m-2" onClick={()=>nagivate("/buy/"+item.id)}>Buy Now</button>}
              <button href="#" class="btn btn-danger cart-button m-2" onClick={()=>removeFromCartItems(item.id)}>Remove</button>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Cart

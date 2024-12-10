import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {

  const [details, setDetails]= useState({});

 
  const getDetails = async () =>{
    try{
    const res = await axios.get(`${URL}/user/profile/`+localStorage.getItem('user'));
      setDetails(res.data);
      console.log(res.data);
      
    }
    catch(error){
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getDetails();
  },[]);


  return (
    <div id='iheight'>
      <h1>Profile page.............</h1>

      <div>

        <h3>{details?.username}</h3>
        <h3>{details?.firstName}</h3>
        <h3>{details?.lastName}</h3>
        <h3>{details?.status}</h3>
        <h3>{details?.email}</h3>
        <h3>{details?.url}</h3>
      </div>

    </div>
  )
}

export default Profile;

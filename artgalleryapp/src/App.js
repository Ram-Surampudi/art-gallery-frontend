import './App.css';
import Nav from "./auth/Nav.jsx";
import Contact from "./auth/Contact.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";
import AddCategory from './admin/AddCategory.jsx';
import UpdateArt from './admin/UpdateArt.jsx';
import AddArt from './admin/AddArt.jsx';
import AdminHome from './admin/AdminHome.jsx';
import Register from './auth/Register.jsx';
import Login from './auth/Login.jsx';
import Verify from './user/Verify'
import HomePage from './user/HomePage'
import Profile from './user/Profile'
import Booking from './user/Booking'
import Cart from './user/Cart'
import Art from './user/Art'
import CategoryArt from './user/CategoryArt.jsx';
import Arts from './admin/Arts.jsx';
import Buy from './user/Buy.jsx';
import CancelOrder from './user/CancelOrder.jsx';
import { Toaster } from 'react-hot-toast';
import Loading from './auth/Loading.jsx';

export const Arr = createContext();
export const URL = "http://localhost:8081";


function App() {

  const [arr,setarr] = useState(['home', 'booking', 'cart', 'profile' , 'logout']);

  const isSign = !!localStorage.getItem('user')

  useEffect(()=>{
      // return ()=> localStorage.removeItem('token');
  },[]);

  return (
    <div className="App">
      <Arr.Provider value={[arr,setarr]}>
      <Nav/>
      <Toaster/>
      <Loading/>
    <BrowserRouter>
    <Routes>
      
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />


        <Route path='/verify/:id' element={<Verify />} />
         <Route path='/home' element={isSign && <HomePage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/art/:id' element={<Art />} />
          <Route path='/category/:cat' element={<CategoryArt />} />
          <Route path='/buy/:id' element={<Buy />} />
          <Route path='/cancelorder/:id' element={<CancelOrder />} />
          <Route path='/logout' element={<Navigate to="/login"/>} />


          <Route path='/admin' element={<AdminHome />} />
          <Route path='/addart' element={<AddArt />} />
          <Route path='/arts' element={<Arts />} />
          <Route path='/addart/:Data' element={<AddArt />} />
          <Route path='/addcategory' element={<AddCategory />} />
          <Route path='/update/:id' element={<UpdateArt />} />


    </Routes>
    </BrowserRouter>
    </Arr.Provider>
	<Contact/>
    </div>
  );
}

export default App;

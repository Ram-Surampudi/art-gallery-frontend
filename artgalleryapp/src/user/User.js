import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Verify from './Verify'
import Login from '../auth/Login'
import HomePage from './HomePage'
import Profile from './Profile'
import Booking from './Booking'
import Cart from './Cart'
import Category from './Category';
import Art from './Art'


const User = () => {
  return (
    <Routes>
          <Route path='/verify/:id' element={<Verify />} />
         <Route path='/home' element={<HomePage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/art/:id' element={<Art />} />
          <Route path='/category/:cat' element={<Category />} />
          <Route path='/logout' element={<Login />} />
    </Routes>
  )
}

export default User

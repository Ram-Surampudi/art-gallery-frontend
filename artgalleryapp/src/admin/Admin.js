import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from './AdminHome'
import AddArt from './AddArt'
import AddCategory from './AddCategory'
import Login from '../auth/Login'
import DeleteArt from './DeleteArt'
import UpdateArt from './UpdateArt'

const Admin = () => {
  return (
    <Routes>
    <Route path='/admin' element={<AdminHome />} />
    <Route path='/addart' element={<AddArt />} />
    <Route path='/addcategory' element={<AddCategory />} />
    <Route path='/delete/:id' element={<DeleteArt />} />
    <Route path='/update/:id' element={<UpdateArt />} />
    <Route path='/logout' element={<Login />} />
</Routes>
  )
}

export default Admin

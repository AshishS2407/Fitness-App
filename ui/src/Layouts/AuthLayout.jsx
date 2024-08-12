import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar1 from '../components/Navbar1'
import Footer from '../components/Footer'
const AuthLayout = () => {
  return (
    <> 

  <Navbar1/>
    <Outlet/>
    <ToastContainer/>
    <Footer/>

    </>
  )
}

export default AuthLayout
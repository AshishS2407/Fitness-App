import React from 'react'
import { Link } from 'react-router-dom'
import { getUserType } from '../pages/LoginPage'
import Logout from './Logout'

const Navbar = () => {

  const userType = getUserType()
  return (
    <>



      <div className="flex justify-end gap-x-10 p-4 font-semibold bg-gray-800">
        <h1 className="text-2xl text-white hover:text-blue-500 font-bold mr-[1300px]">Fitness Hub</h1>
        <div className="text-white hover:text-blue-500"> <Link to="/aboutus"> <input type="button" />About Us</Link></div>

        <div className="text-white hover:text-blue-500"> <Link to="/contactus"> <input type="button" />Contact Us</Link></div>

        {userType == 'admin' &&
          <Link to="/admin" className='text-white hover:text-blue-500'>Admin Dashboard</Link>
        }
                <div> <Logout /> </div>




      </div>



    </>

  )
}

export default Navbar
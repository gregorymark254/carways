import React, {useState} from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookingState } from '../Context/BookingContext'


const Nav = () => {

  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };

  const { state: { userInfo }, dispatch } = BookingState()

  const signOut = () => {
    dispatch({type:'USER_SIGNOUT', })
    localStorage.removeItem('userInfo')
  }

  return (
    <div>
      <div className="container mx-auto py-4">
      <ToastContainer />
        <nav className='flex justify-between items-center  px-4'>
          {/* Top Nav */}
          <div>
            <img className="h-10" src="https://live.themewild.com/carway/assets/img/logo/logo.png" alt="LOGO" />
          </div>
          <ul className='hidden md:flex text-xl'>
            <li>
              <a href="/" className="hover:text-[#4F5DEC] px-3 py-2 ">Home</a>
            </li>
            <li>
              <a href="/cars" className="hover:text-[#4F5DEC] px-3 py-2 ">Cars</a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#4F5DEC] px-3 py-2 ">About</a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#4F5DEC] px-3 py-2 ">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#4F5DEC] px-3 py-2">Contact</a>
            </li>
          </ul>
          <div className="md:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <h3 className="bg-[#4F5DEC] text-white rounded-lg p-2"><FiPhoneCall/></h3>
              <div>
                <p>Need Car Rent?</p>
                <p className="text-[#4F5DEC] font-bold text-lg">+254 798 551 1778</p>
              </div>
            </div>
            <a href="/cars" className="bg-[#4F5DEC] text-white py-3 px-5 rounded-lg">Explore Cars</a>
            {userInfo ? (
              <div className="dropdown inline-block relative">
                <button title={userInfo.email} className=" text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center hover:text-[#de9631]">
                  <span  onClick={signOut} className="mr-1">User Profile</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li><a href="#/" className="rounded-t bg-gray-200 hover:text-[#de9631] py-2 px-8 block whitespace-no-wrap">Sign Out</a></li>
                </ul>
              </div>
              ) 
              : (<a href="/login" className="bg-[#4F5DEC] text-white rounded-lg p-3"><h3><FaRegUserCircle/></h3></a>)
            }
          </div>
          
          
          {/* Responsive Nav */}
          {!navIsShown && (
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 md:hidden' onClick={toggleNavIsShown} >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
            </svg>
          )}
          {navIsShown && (
            <div className='md:hidden absolute z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6'>
              <div className='flex justify-between border-b-2 border-b-gray-600'>
                <div className="flex items-center ">
                  <h3>Gregory</h3>
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6' onClick={toggleNavIsShown} >
                  <path  strokeLinecap='round'  strokeLinejoin='round'  d='M6 18L18 6M6 6l12 12'/>
                </svg>
              </div>
              <ul className=' mb-4'>
                <li>
                  <a href="/" className="px-3 py-2 text-lg">Home</a>
                </li>
                <li>
                  <a href="/cars" className=" px-3 py-2 text-lg">Cars</a>
                </li>
                <li>
                  <a href="/about" className=" px-3 py-2 text-lg">About</a>
                </li>
                <li>
                  <a href="/services" className="px-3 py-2 text-lg">Services</a>
                </li>
                <li>
                  <a href="/contact" className="px-3 py-2 text-lg">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  )
}

export default Nav

import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookingState } from '../Context/BookingContext'
import { useNavigate } from 'react-router-dom'



const Nav = () => {

  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };

  const navigate = useNavigate()
  const { state: { userInfo }, dispatch } = BookingState()
  const signOut = () => {
    dispatch({type:'USER_SIGNOUT', })
    localStorage.removeItem('userInfo')
    navigate("/")
  }

  return (
    <div className="nav">
      <div className="bg-white shadow shadow-neutral-700">
        <div className="container mx-auto py-4">
          <ToastContainer />
          <nav className='flex justify-between items-center px-4'>
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
            <div className="md:flex hidden items-center space-x-8">
              <div className="flex items-center space-x-4">
                <h3 className="bg-[#4F5DEC] text-white rounded-lg p-2"><FiPhoneCall/></h3>
                <div>
                  <p>Need Car Rent?</p>
                  <p className="text-[#4F5DEC] font-bold text-lg">+254 702 589 522</p>
                </div>
              </div>
              <a href="/cars" className="bg-[#4F5DEC] text-white py-3 px-5 rounded-lg">Explore</a>
              {userInfo ? (
                <div className="relative" data-te-dropdown-ref>
                <a className="flex items-center  px-3 py-2  transition duration-150 ease-in-out "
                  href="/#"  id="dropdownMenuButton2" data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init data-te-ripple-color="light">
                  {userInfo.email}
                  <span className="ml-2 w-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
                <ul className="absolute w-full z-[1000] float-left  hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block" aria-labelledby="dropdownMenuButton2"data-te-dropdown-menu-ref>
                  <li>
                    <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="/profile"
                      data-te-dropdown-item-ref>My profile</a>
                  </li>
                  <li>
                    <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                      href="#logout"
                      onClick={signOut}
                      data-te-dropdown-item-ref>Log out</a>
                  </li>
                </ul>
              </div>
                ) 
                : (<a href="/login" className="bg-[#4F5DEC] text-white rounded-lg p-3"><h3><FaRegUserCircle/></h3></a>)
              }
            </div>
            
            
            {/* Responsive Nav */}
            {!navIsShown ? (
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 md:hidden' onClick={toggleNavIsShown} >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
              </svg>
              
            ) : (          
              <svg
                xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-7 h-7 z-50' onClick={toggleNavIsShown} >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
              </svg>
            )}
            {navIsShown && (
              <div className='md:hidden absolute z-10 top-12 left-0  w-full  text-black'>
                <ul className='text-center mb-2 bg-white p-2 mx-4'>
                  <li>
                    <a href="/" className="px-3 text-lg hover:text-blue-600"><b>Home</b></a>
                  </li>
                  <li>
                    <a href="/cars" className="px-3 text-lg hover:text-blue-600"><b>Cars</b></a>
                  </li>
                  <li>
                    <a href="/about" className=" px-3 py-2 text-lg hover:text-blue-600"><b>About</b></a>
                  </li>
                  <li>
                    <a href="/services" className="px-3 py-2 text-lg hover:text-blue-600"><b>Services</b></a>
                  </li>
                  <li>
                    <a href="/contact" className="px-3 py-2 text-lg hover:text-blue-600"><b>Contact</b></a>
                  </li>
                  <hr />
                  <li className="p-2">
                    <a href="/login" className="px-3 py-2 text-lg bg-[#4F5DEC] text-white rounded-lg hover:bg-blue-400"><b>Login</b></a>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Nav

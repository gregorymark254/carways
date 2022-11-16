import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { CartState } from '../components/context/ProductContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Navbar = () => {

  const [navIsShown, setnavIsShown] = useState(false);

  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };

  const { state: {cart, userInfo}, dispatch } = CartState()

  const signOut = () => {
    dispatch({type:'USER_SIGNOUT', })
    localStorage.removeItem('userInfo')
  }

  

  return (
    <main>
      <div className="bg-[#f1ebf5]">
        <div className="container mx-auto p-4">
        <ToastContainer position="bottom-center" limit={1} />
          <nav className='flex justify-between items-center px-4  w-full '>
            {/* Top nav */}
            <ul className='hidden md:flex'>
                <Link to="/" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:text-[#de9631]">Home</Link>
                <div className="dropdown inline-block relative">
                  <button className=" text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center hover:text-[#de9631]">
                    <span className="mr-1">Shop</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li><Link to="/product-category" className="rounded-t bg-gray-200 hover:text-[#de9631] py-2 px-8 block whitespace-no-wrap">Product Category</Link></li>
                    <li><Link to="/top-rated" className="bg-gray-200 hover:text-[#de9631] py-2 px-8 block whitespace-no-wrap">Top rated products</Link></li>
                  </ul>
                </div>
                <Link to="/media" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:text-[#de9631]">Media</Link>
                <Link to="/faqs" className="font-bold px-3 py-2 text-slate-700 rounded-lg  hover:text-[#de9631]">Faqs</Link>
                <Link to="/about" className="font-bold px-3 py-2 text-slate-700 rounded-lg  hover:text-[#de9631]">About Us</Link>
                <Link to="/contact" className="font-bold px-3 py-2 text-slate-700 rounded-lg  hover:text-[#de9631]">Contact Us</Link>
            </ul>
            <section className="hidden md:flex divide-x ">
              {userInfo ? (
                <div className="dropdown inline-block relative">
                <button title={userInfo.name} className=" text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center hover:text-[#de9631]">
                  <span className="mr-1">User Profile</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li><Link to="" onClick={signOut} className="rounded-t bg-gray-200 hover:text-[#de9631] py-2 px-8 block whitespace-no-wrap">Sign Out</Link></li>
                </ul>
              </div>
              ) 
              : (<Link to="/login" className="font-bold text-2xl px-3 py-2  text-slate-700 rounded-lg hover:text-[#de9631]"><FaRegUser/></Link>)
              }
              <Link to="/cart" className="font-bold text-2xl px-3 py-2 relative text-slate-700 rounded-lg  hover:text-[#de9631]">
                <BsCart2/><span className="absolute text-base rounded-lg px-1 left-6 -top-2 bg-orange-600 text-white">{cart.length}</span>
              </Link>
            </section>
            
            {/* Responsive Nav */}
            {!navIsShown && (
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 md:hidden' onClick={toggleNavIsShown} >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
              </svg>
            
            )}

            {navIsShown && (
              <div className='md:hidden absolute z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6'>
                <div className='flex justify-end border border-b-2 border-b-black'>
                  <svg xmlns='http://www.w3.org/2000/svg'fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6' onClick={toggleNavIsShown} >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'/>
                  </svg>
                </div>
                <ul className=' mb-4'>
                  <li>
                    <a href="/" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:text-[#de9631]">Home</a>
                  </li>
                  <li>
                    <div className="dropdown inline-block relative">
                    <button className=" text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center hover:text-[#de9631]">
                      <span className="mr-1">Shop</span>
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                      <li><a href="/product-category" className="rounded-t bg-gray-200 hover:text-[#de9631] py-2 px-8 block whitespace-no-wrap">Product Category</a></li>
                      <li><a href="/top-rated" className="bg-gray-200 hover:text-[#de9631] py-2 px-8 block whitespace-no-wrap">Top rated products</a></li>
                    </ul>
                  </div>
                  </li>
                  <li>
                    <a href="/media" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:text-[#de9631]">Media</a>
                  </li>
                  <li>
                    <a href="/faqs" className="font-bold px-3 py-2 text-slate-700 rounded-lg  hover:text-[#de9631]">Faqs</a>
                  </li>
                  <li> 
                    <a href="/about" className="font-bold px-3 py-2 text-slate-700 rounded-lg  hover:text-[#de9631]">About Us</a>
                  </li>
                  <li>
                    <a href="/contact" className="font-bold px-3 py-2 text-slate-700 rounded-lg  hover:text-[#de9631]">Contact Us</a>
                  </li>
                </ul>
                <div className="flex">
                  <a href="/login" className="font-bold text-2xl px-3 py-2  text-slate-700 rounded-lg hover:text-[#de9631]"><FaRegUser/></a>
                  <a href="/cart" className="font-bold text-2xl px-3 py-2 relative text-slate-700 rounded-lg  hover:text-[#de9631]">
                    <BsCart2/><span className="absolute text-base rounded-lg px-1 left-6 -top-2 bg-orange-600 text-white">0</span>
                  </a>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div> 
    </main>
  )
}


export default Navbar


import React from 'react'
import { BsWhatsapp } from "react-icons/bs";

const Header = () => {

  return (
    <main>
      <div className="bg-[#191A19] text-center">
        <div className="container mx-auto p-6">
          <div className="flex justify-between ">
            <div className="hidden md:flex">
              <form>
                <span className="relative flex items-center">
                  <input 
                    className="py-2 px-4 bg-[#414141] placeholder-gray-400 focus:outline-none  caret-white"
                    type="search" 
                    required
                    placeholder="Search product..."
                  />
                  <svg className="absolute text-neutral-400 h-6 w-6 flex right-2  hover:cursor-pointer hover:bg-orange-500 hover:h-full" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </span>
              </form>
            </div>
            <div>
              <img  src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/themes/footzy/images/megnor/logo.png" alt="" />
            </div>
            <div className="hidden md:flex text-white items-center space-x-2">
              <span className="text-green-700"><BsWhatsapp/></span>
              <p className="">Call Us (+254) 798-551-78</p> 
            </div>
          </div>
        </div>
      </div>
    </main>
    
  )
  
  
}

export default Header

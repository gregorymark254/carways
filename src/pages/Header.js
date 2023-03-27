import React from 'react'
import { MdMailOutline,MdAccessAlarm } from "react-icons/md";
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa";


const Header = () => {
  return (
    <header className="bg-[black] text-white">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex gap-6">
            <div className="flex flex-wrap items-center space-x-2">
              <h3 className="text-[#4649FF]"><MdMailOutline/></h3>
              <h4>info@carway.com</h4>
            </div>
            <div className="flex flex-wrap items-center space-x-2">
              <h3 className="text-[#4649FF]"><MdAccessAlarm/></h3>
              <h4>Sun - Friday (08AM - 10PM)</h4>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-[#4649FF]">
            <h3><FaFacebookF/></h3>
            <h3><FaTwitter/></h3>
            <h3><FaInstagram/></h3>
            <h3><FaLinkedinIn/></h3>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

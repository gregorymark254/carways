import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import { MdOutlineMarkEmailRead,MdOutlineLocationOn,MdSend } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <section className="bg-black text-white">
        <div className="container mx-auto py-4">
          <div className="flex flex-wrap justify-between gap-10 ">
            <div className="space-y-4 p-4">
              <img className="h-12" src="https://live.themewild.com/carway/assets/img/logo/logo-light.png" alt="LOGO" />
              <p>We are many variations of passages available <br />but the majority have suffered alteration in <br />some form by injected humour words believable.</p>
              <div className="flex items-center space-x-4">
                <h3 className="bg-[#4F5DEC] text-white rounded-lg p-2"><FiPhoneCall/></h3>
                <div>
                  <p className="font-bold text-lg">+254 702 589 522</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <h3 className="bg-[#4F5DEC] text-white rounded-lg p-2"><MdOutlineLocationOn/></h3>
                <div>
                  <p className="font-bold text-lg">Westlands,Nairobi Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <h3 className="bg-[#4F5DEC] text-white rounded-lg p-2"><MdOutlineMarkEmailRead/></h3>
                <div>
                  <p className="font-bold text-lg">info@carway.com</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 p-4">
              <div className="footer-widget">
                <h2>Quick Links</h2>
              </div>
              <p><span className="text-[#4F5DEC]">&#10148;&nbsp; </span><a href="/"> About Us</a></p>
              <p><span className="text-[#4F5DEC]">&#10148;&nbsp; </span><a href="/">Update News</a></p>
              <p><span className="text-[#4F5DEC]">&#10148;&nbsp; </span><a href="/">Terms of Service</a></p>
              <p><span className="text-[#4F5DEC]">&#10148;&nbsp; </span><a href="/">Privacy Policy</a></p>
              <p><span className="text-[#4F5DEC]">&#10148;&nbsp; </span><a href="/">Our Team</a></p>
            </div>
            <div className="space-y-3 p-4">
              <div className="footer-widget">
                <h2>Support Center</h2>
              </div>
              <p><span className="text-[#4F5DEC]">&#10148;&nbsp; </span><a href="/">Help Center</a></p>
              <p><span className="text-[#4F5DEC]">&#10148;&nbsp; </span><a href="/">FAQ'S</a></p>
              <p><span className="text-[#4F5DEC]">&#10148;&nbsp; </span><a href="/">Booking Tips</a></p>
              <p><span className="text-[#4F5DEC]">&#10148;&nbsp; </span><a href="/">Live Chat</a></p>
              <p><span className="text-[#4F5DEC]">&#10148;&nbsp; </span><a href="/">Contact Us</a></p>
            </div>
            <div className="space-y-4 p-4">
              <div className="footer-widget">
                <h2>Newsletter</h2>
              </div>
              <p>Subscribe Our Newsletter <br /> To Get Latest Update And News</p>
              <div>
                <form action="">
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="block px-2 py-3 mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                  />
                  <button className="bg-[#4F5DEC] text-white px-5 py-2 rounded-lg flex items-center">Send Message &nbsp;&nbsp;<span><MdSend/></span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#100F0F] text-white">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-between">
            <div className="p-1">
              <h4>&copy; copyright 2023 <span className="text-[#4F5DEC]">carway</span> All Rights Reserved.</h4>
            </div>
            <div className="flex space-x-4 p-1 text-[#4F5DEC]">
              <h4 className="bg-white p-2 rounded-lg"><FaFacebookF/></h4>
              <h4 className="bg-white p-2 rounded-lg"><FaTwitter/></h4>
              <h4 className="bg-white p-2 rounded-lg"><FaLinkedinIn/></h4>
              <h4 className="bg-white p-2 rounded-lg"><FaYoutube/></h4>
            </div>
          </div>
        </div>
      </section>
      
    </footer>
  )
}

export default Footer

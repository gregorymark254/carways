import React from 'react'
import {Link} from 'react-router-dom'
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <main>
      <div className="bg-[#02030a] text-white">
        <div className="container mx-auto p-4">
          <div className="text-center">
            <form>
              <input 
                type="email" 
                className="py-2 px-4 placeholder-slate-400 focus:outline-none focus:ring-orange-500 focus:ring-1"
                required
                placeholder="Email Address"
              />
              <button type="submit" className="py-2 px-4 bg-orange-600 hover:bg-orange-400">Subscribe</button>
            </form>
          </div>

         
          <div className="md:grid grid-cols-3">
            <div>
              <h3 className="text-center p-4">Follow Us</h3>
              <div className="flex gap-6 justify-center text-3xl">
                <Link className="hover:text-blue-500" to=""><FaFacebookF/></Link>
                <Link className="hover:text-blue-500" to=""><FaTwitter/></Link>
                <Link className="hover:text-red-500" to=""><FaYoutube/></Link>
                <Link className="hover:text-purple-500" to=""><FaInstagram/></Link>
              </div>
            </div>
            <div>
              <h3 className="text-center p-4">Download Apps</h3>
              <div className="md:flex gap-2 justify-center">
                <img src="https://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/01/footer-cms-3.png" alt="windowstore" />
                <img src="https://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/01/footer-cms-2.png" alt="playstore" />
                <img src="https://capricathemes.com/wordpress/WCM01/WCM010020/WP2/wp-content/uploads/2020/01/footer-cms-1.png" alt="apple" />
              </div>
            </div>
            <div>
              <h3 className="text-center p-4">Payment Accepted</h3>
              <div className="flex gap-4 justify-center">
                <img className="w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtYV0mnps4rtsgpbyZd8VC9PoDIt4SKzp0PpFzCssOeaaypY5jsqC9tyme1J5wg_PPgk&usqp=CAU" alt="" />
                <img className="w-10" src="https://e7.pngegg.com/pngimages/910/492/png-clipart-mastercard-logo-credit-card-visa-brand-mastercard-text-label-thumbnail.png" alt="" />
                <img className="w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_N7we1mlt_2BUwBjm9RYjhR_23wcJt6OymGARvnNZ1BN0FF_QTf8_tF9TAoZ5sVmSbs&usqp=CAU" alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className="bg-[#0b0b0f] text-white text-center">
        <div className="container mx-auto p-4">
          <p>Copyright &copy; 2022 By Gregory</p>
        </div>
      </div>
    </main>
  )
}

export default Footer

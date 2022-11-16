import React from 'react'
import { BiWorld,BiHeart,BiConversation } from "react-icons/bi";
import { BsBox,BsFillGrid3X3GapFill,BsCameraVideoFill } from "react-icons/bs";

const About = () => {
  return (
    <main>
      <div className="text-center p-4">
        <h1>About Us</h1>
        <p>FOOTZY / About Us</p>
      </div>

      <div className="bg-[#f1ebf5]">
        <div className="container mx-auto p-6">
          <div className="text-center p-4">
            <h2 className="text-center p-2">If You Wanted Get Model, How Would You Do It?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, culpa, laudantium molestias officia aliquid 
              necessitatibus dignissimos iure accusantium eveniet dolor neque totam deleniti aspernatur ipsam voluptas! Quae quod perspiciatis quas?
              necessitatibus dignissimos iure accusantium eveniet dolor neque totam deleniti aspernatur ipsam voluptas! Quae quod perspiciatis quas?
            </p>
          </div>

          <div className="image py-6">
            <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/Daily-Style-Diary-Bali-Edition-1200x500.jpg" alt="" />
          </div>

          <div className="py-16">
            <h1 className="text-center py-4">Our Team Members</h1>
            <div className="md:grid grid-cols-3 gap-4">
              <div className="border border-slate-400">
                <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2015/08/s4-600x400_t.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ab quidem ad enim? </p>
              </div>
              <div className="border border-slate-400">
                <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2015/08/s1-600x400_t.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ab quidem ad enim? </p>
              </div>
              <div className="border border-slate-400">
                <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2015/08/s2-600x400_t.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ab quidem ad enim? </p>
              </div>
            </div>
          </div>

          <h1 className="text-center py-4">Megnor History</h1>
          <div className="md:grid grid-cols-3 gap-6 text-center p-6">
            <div>
              <p className="ml-48 text-2xl"><BiWorld/></p>
              <h3>Easy To Use</h3>
              <p>We’ve Put A Lot Of Thought In Giving You The Best Possible Experience To Make Your Job Easier.</p>
            </div>
            <div>
              <p className="ml-48 text-2xl"><BiConversation/></p>
              <h3>OUTSTANDING SUPPORT</h3>
              <p>Modules Comes Fully Documented With Step By Step Instructions. Access Premium Support Forum.</p>
            </div>
            <div>
              <p className="ml-48 text-2xl"><BiHeart/></p>
              <h3>SIMPLY BEAUTIFUL</h3>
              <p>Our Themes Are Not Just Nicely Coded, They Are Built To Show Your Visitors How Much You Care For Beauty And For Design.</p>
            </div>
            <div>
              <p className="ml-48 text-2xl"><BsBox/></p>
              <h3>CAREFUL CRAFTED</h3>
              <p>Coded With WordPress Best Practices In Mind, Modules Will Give You An Amazing Looking Site Easier.</p>
            </div>
            <div>
              <p className="ml-48 "><BsFillGrid3X3GapFill/></p>
              <h3>20+ BULILDER MODULE</h3>
              <p>Create As Many Modules As You Want. Personalize Them And Build With Them Your Pages.</p>
            </div>
            <div>
              <p className="ml-48 text-2xl "><BsCameraVideoFill/></p>
              <h3>WP VIDEO TRAINING</h3>
              <p>Enjoy A Comprehensive Collection Of WordPress 101 Video Tutorials On Our Membership Training Area.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}


export default About

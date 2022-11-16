import React from 'react'

const Home = () => {
  return (
    <main>
      <div className="container mx-auto p-4">
        <div>
          <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/cms-banner-01.jpg" alt="" />
        </div>

        <div className="md:grid grid-cols-4 gap-4 py-8">
          <div className="">
            <h3>FAST & FREE SHIPING</h3>
            <p>On order over $90</p>
          </div>
          <div className="">
            <h3>SAVE 20% WHEN YOU</h3>
            <p>Call +254 798551778</p>
          </div>
          <div className="">
            <h3>ONLINE HELP SUPORT</h3>
            <p>Sign up for gifts</p>
          </div>
          <div className="">
            <h3>14-DAY MONEY BACK</h3>
            <p>On order over $90</p>
          </div>
        </div>

        <div className="md:grid grid-cols-2 gap-6 py-6">
          <div>
            <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/cms-banner-01.jpg" alt="" />
          </div>
          <div>
            <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/cms-banner-02.jpg" alt="" />
          </div>
        </div>

        <div>
          <h2>RECENT ARRIVALS</h2>
        </div>

        <div>
          <img className="w-full" src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/cms-banner-01.jpg" alt="Snow"/>
          
        </div>

        <div className="py-6">
          <h1 className="text-center p-4">FROM THE BLOG</h1>
          <div className="md:grid grid-cols-3 gap-4">
            <div>
              <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/Sporty-Pieces-You-Need-In-Your-Closet-446x390_t.jpg" alt="" />
              <p className="text-orange-500 font-bold">18TH JAN 2017</p>
              <p className="font-bold"><u>Lorem ipsum dolor sit amet consectetur adipisicing elit.</u></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio, nostrum sequi minus saepe repellendus omnis.</p>
            </div>
            <div>
              <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/Reasons-This-is-the-New-It-Bag-446x390_t.jpg" alt="" />
              <p className="text-orange-500 font-bold">22TH MAY 2017</p>
              <p className="font-bold"><u>Lorem ipsum dolor sit amet consectetur adipisicing elit.</u></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio, nostrum sequi minus saepe repellendus omnis.</p>
            </div>
            <div>
              <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/Try-These-Takes-on-a-Classic-Button-Up-446x390_t.jpg" alt="" />
              <p className="text-orange-500 font-bold">18TH OCTOBER 2017</p>
              <p className="font-bold"><u>Lorem ipsum dolor sit amet consectetur adipisicing elit.</u></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio, nostrum sequi minus saepe repellendus omnis.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home

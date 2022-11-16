import React, {useState,useEffect} from 'react'
import Loader from './Loader'

const Media = () => {
  
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false) 
  },[])
  
  return (
    <div>
      <div className="container mx-auto p-4 aspect-square">
        {
          isLoading ? (
            <Loader/> 
          ) : (
            <div>
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold">Media Page</h3>
                <p>FOOTZY / Media</p>
              </div>

              <div className="md:grid grid-cols-3 gap-3 pb-6">
                <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/Daily-Style-Diaries-NYFW-Shopbop-Brunch-1024x800.jpg" alt="" />
                <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/Two-Pieces-to-Transition-Your-Favorite-Looks-1024x800.jpg" alt="" />
                <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/Try-These-Takes-on-a-Classic-Button-Up-1024x800.jpg" alt="" />
                <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/These-5-Sale-Items-Work-with-Any-Outfit-1024x800.jpg" alt="" />
                <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/Sporty-Pieces-You-Need-In-Your-Closet-1024x800.jpg" alt="" />
                <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/Reasons-This-is-the-New-It-Bag-1024x800.jpg" alt="" />
                <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/Pieces-You-Need-In-Your-Closet-1024x800.jpg" alt="" />
                <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/Nordstrom-Sale-Open-to-the-Public-1024x800.jpg" alt="" />
                <img src="https://wordpress.templatemela.com/woo/WCM05/WCM050102/wp-content/uploads/2019/06/Daily-Style-Diary-Bali-Edition-1024x800.jpg" alt="" />
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Media

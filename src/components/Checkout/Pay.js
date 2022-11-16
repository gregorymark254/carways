// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// import StripeCheckout from 'react-stripe-checkout';
// const KEY = "pk_test_51LdD0VDthE7LNJCACpCTpsCMk6Z4VBgRbIRkSQ4zrJTMmDuHlVDdO1vBC2sgkS3hHfalBQ5vMujNA7Fo0OV5DdkX00S2RfJlCq"

const Pay = () => {
   
    // const [stripeToken,setStripeToken] = useState(null)

    // const onToken = (token) => {
    //     setStripeToken(token)
    // }

    // useEffect(() => {
    //     const makeRequest = async () => {
    //         try {
    //             const res = await axios.post("http://localhost:4500/api/checkout/payment",{
    //                 tokenId: stripeToken.id,
    //                 amount: 2000,
    //             })
    //             console.log(res.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //         stripeToken && makeRequest()
    //     }
        
    // },[stripeToken])


  return (
    <div>
      {/* <StripeCheckout name="Footzy shop" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCab2U-837QzMNIGyVF_tn9xHcONeF8ZajnA&usqp=CAU"
      billingAdress
      shipingAddres
      description="total is 20$"
      amount={2000}
      token={onToken}
      stripeKey={KEY}>
        <button
            className="bg-orange-600 px-4 py-2"
            
        >Pay</button>
      </StripeCheckout> */}
    </div>
  )
}

export default Pay

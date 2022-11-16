import React, { useState, useEffect }  from 'react'
import { CartState } from '../context/ProductContext'
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { TiArrowLeftThick } from "react-icons/ti";

const Cart = () => {

  const navigate = useNavigate()
  const { state: {cart}, dispatch } = CartState()
  const [total,setTotal] = useState()

  useEffect(() => {
    setTotal(cart.reduce((acc,current) => acc + Number(current.price), 0))
  },[cart])

  const handleClick = (e) => {
    e.preventDefault()
    navigate('/login?redirect=/shipping')
  }



  return (
    <main>
      <div className="text-center py-2">
        <h1>Cart Page</h1>
        <p>FOOTZY / Basket</p>
      </div>

      <div className="bg-[#f1ebf5] min-h-screen">
        <div className="container mx-auto p-4 min-h-full ">
          <main className="md:grid grid-cols-3 gap-6 justify-between">
            <div className="col-span-2">
              <h2>Your Products</h2>
              {
                cart.length > 0 ? (
                  <div>
                    {
                      cart.map((prod) => (
                        <div key={prod.id} className="flex">
                          <p><img className="object-cover h-48 w-96" src={prod.src} alt="" /></p>
                          <div>
                            <span>{prod.title}</span> <br />
                            <span>Ksh {prod.price}</span>
                            <button className="bg-white text-black py-2 px-4 text-xl">-</button>
                            <span className="px-4 text-lg">{prod.count}</span>
                            <button className="bg-white text-black py-2 px-4 text-xl">+</button>
                          </div>
                          <span  className="text-3xl hover:text-red-600"><MdDeleteForever/></span>
                        </div>
                      ))
                    }
                  </div>
                ) : (
                  <div className="bg-white p-4 border-t-2 border-orange-500">
                    <p>Your cart is empty...</p>
                    <button className='py-2 px-6 bg-orange-600 text-white justify-center'><span><TiArrowLeftThick/></span> Return to shop</button>
                  </div>
                )}
            </div>
            <div className="bg-white p-8 rounded-lg space-y-1">
              <h2>Order Summury</h2>
              <p>Total price : Ksh {total} </p>
              <div className="space-y-3">
                <button onClick={handleClick} className="py-2 px-4 w-full bg-green-700 text-white">Checkout</button> <br />
                <button onClick={() => {dispatch({type: 'EMPTY_BASKET'})}} className="py-2 px-4 w-full bg-red-500 text-white">Remove All</button>
              </div>
            </div>
          </main>
        </div>
      </div>

      
      
    </main>
  )
}

export default Cart

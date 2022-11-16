import React from 'react'
import { useParams } from 'react-router-dom';
import allVans from '../ShoeData/Vans'
import { CartState } from '../context/ProductContext'

const VansDetails = () => {

  const { state: {cart}, dispatch } = CartState()
  const params = useParams();
  // eslint-disable-next-line eqeqeq
  const datas = allVans.find((product) => product.id == params.id);


  return (
    <main>
      <div>
        <button onClick={() => window.history.go(-1)} className="px-6 py-4 text-white bg-orange-700" >Back</button>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex gap-4 p-6 border border-black">
          <div>
            <img src={datas.src} alt="" />
          </div>
          <div className='pr-10'> 
            <h2>{datas.title}</h2>
            <span>Ksh. {datas.price}</span>
            <h3>{datas.description}</h3>
            <p>{datas.content}</p>
            <br />

              <label htmlFor="size">
                <input 
                  type="number"
                  placeholder="Size"
                  className="px-4 py-2 w-24 m-4 bg-white border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1s"
                />
              </label>
              <label htmlFor="color">Color &nbsp;
               <select name="" id="" className="px-4 py-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1s">
                <option value="0">Default</option>
                <option value="1">blue</option>
                <option value="2">white</option>
                <option value="3">black</option>
               </select>
              </label>
              <div className="flex text-center">
                <div>
                  <button className="px-2 text-lg border border-slate-300 ">-</button>
                  <span>1</span>
                  <button className="px-2 text-lg border border-slate-300 ">+</button>
                </div>
                <div>
                {cart.some((p) => p.id === datas.id) ? (<button onClick={() => {dispatch({type: 'REMOVE_FROM_CART', payload:datas})}}  className="w-full bg-red-600 text-white hover:bg-red-300 py-2 px-4">Remove</button>
                  ) : (
                      <button onClick={() => {dispatch({type: 'ADD_TO_CART', payload:datas})}}  className="w-full border border-black hover:bg-black hover:text-white py-2 px-4">Add to cart</button>
                  )}
                </div>
              </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default VansDetails
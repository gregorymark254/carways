import React from 'react'
import { useParams } from 'react-router-dom';
import allPuma from '../ShoeData/Puma'

const PumaDetails = () => {
    
  const params = useParams();
  const datas = allPuma.find((product) => product.id === params.id);


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
            <form>
              <label htmlFor="size">
                <input 
                  type="number"
                  placeholder="Size"
                  required 
                  className="px-4 py-2 w-24 my-4 bg-white border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1s"
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
              <div className="flex text-center space-x-4">
                <div>
                  <button className="px-5 py-2 text-lg border border-slate-300 ">-</button>
                  <span>1</span>
                  <button className="px-5 py-2 text-lg border border-slate-300 ">+</button>
                </div>
                <div>
                  <button className="text-white bg-orange-600 px-5 py-2">Add to cart</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PumaDetails
import React from 'react'
import { useParams } from 'react-router-dom';
import allAdidas from '../ShoeData/Adidas'

const Details = () => {

  const params = useParams();
  // eslint-disable-next-line eqeqeq
  const datas = allAdidas.find((product) => product.id == params.id);

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
            <button className="text-white bg-orange-600 px-5 py-2">Add to cart</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Details

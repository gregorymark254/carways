import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import allAdidas from '../ShoeData/Adidas'
import Loader from '../../pages/Loader'

const Adidasprod = () => {

  const [isloading,setIsLoading] = useState(true)
  const [error,setError] = useState(true)

  useEffect(() => {
    setIsLoading(false)
    setError(false) 
  },[])


  //search input
  const [filter, setFilter] = useState('')
  const searchText = (e) => {
    setFilter(e.target.value)
  }
  let dataSearch = allAdidas.filter(product => {
    return Object.keys(product).some(key => product[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  })

  

  //sorting
  // productState : {sort} 
  // onClick={sort === "lowToHigh" ? true : false } onChange={() => productDispatch({type: "SORY_BY_PRICE", payload: "lowToHigh"})}


  return (
    <>
      <div className="text-center p-4">
        <h1>Adidas</h1>
        <p>FOOTZY / Adidas</p>
      </div>

      <div className="bg-[#f1ebf5]">
        <div className="container mx-auto p-4">
          <div className="md:flex gap-6 ">
            {/* flex-1 */}
            <main>
              <form >
                <span className="relative items-center ">
                  <svg class="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                  <input 
                    type="search"
                    required
                    placeholder=" Search.."
                    className="py-2 px-4  border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                    value={filter} 
                    onChange={searchText.bind(this) }
                  />
                </span>
              </form>
              <br />

              <div className="bg-white p-5 ">
                <h3><u>Shop by category</u></h3>
                <Link to="">Men</Link>
                <Link to="">Women</Link>
                <Link to="">Kids</Link>
              </div>
            </main>

            {/* flex-1 */}
            <main>
              <div className="flex justify-between py-4">
                <div>
                  <p>Showing all {dataSearch.length} results</p>
                </div>
                <div>
                  <select name="" id="" className="px-4 py-2 border border-black">
                    <option value="1">Default sorting</option>
                    <option value="2">By price : low to high</option>
                    <option value="3">By price : high to low</option>
                  </select>
                </div>
              </div>

              <hr className="border border-black" />
              {isloading ? (<Loader/>) 
                : error ? (<p>{error}</p>)
                : (
                  <div className="grid grid-cols-4 gap-2 aspect-square">
                    {dataSearch.length > 0 ? (
                        dataSearch.map((product) => (
                          <div key={product.id} product={product} className="hover:translate-y-1 hover:scale-110 hover:drop-shadow-xl">
                            <div className='content'> 
                              <span className="hover:"><img src={product.src} alt="" /></span>
                              <h3><Link to={`/adidas/details/${product.id}`}>{product.title}</Link></h3>
                              <p>{product.description}</p>
                              <hr />
                              <span>Ksh {product.price}</span>
                              
                            </div>
                          </div>
                        ))
                    ) : (
                        <div>
                            <span> No products </span>
                            <span>Go to All</span>
                        </div>
                    )}
                  </div>
                )}
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Adidasprod

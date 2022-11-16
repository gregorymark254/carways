import React from 'react'
import { Link } from 'react-router-dom'
import allBalenciaga from "../../components/ShoeData/Balenciaga";
import { CartState } from '../context/ProductContext'

const BalenciagaProd = () => {

    const { state: {cart}, dispatch } = CartState()

  return (
    <>
        <div className="text-center p-4">
            <h1>Balenciaga</h1>
            <p>FOOTZY / Balenciaga</p>
        </div>

        <div className="bg-[#f1ebf5]">
            <div className="container mx-auto p-4">
                <div className="md:flex gap-6 ">
                    {/* flex-1 */}
                    <main>
                        <form>
                            <input 
                            type="text"
                            required
                            placeholder=" Search.."
                            className="py-2 px-4 w-full"
                            />
                        </form>
                        <br />

                        <div className="bg-white p-5 ">
                            <h3><u>Filter</u></h3>
                            <div className=" grid gap-2">
                            <button className="py-2 px-4 bg-white text-black border border-black hover:bg-[#f1ebf5] hover:-translate-y-2 duration-300">Men</button>
                            <button className="py-2 px-4 bg-white text-black border border-black hover:bg-[#f1ebf5] hover:-translate-y-2 duration-300">Women</button> 
                            <button className="py-2 px-4 bg-white text-black border border-black hover:bg-[#f1ebf5] hover:-translate-y-2 duration-300">Children</button>
                            </div>
                        </div>

                        <div className="bg-white p-5">
                            
                            <h3><u>Filer by price</u></h3>
                            <input type="range" />
                        </div>
                    </main>

                    {/* flex-1 */}
                    <main> 
                        <div className="flex justify-between py-4">
                            <div>
                                <p>Showing all {allBalenciaga.length}</p>
                            </div>
                            <div>
                                <select name="" id="" className="px-4 py-2 border border-black">
                                <option value="1">Sort</option>
                                <option value="1">Sort</option>
                                <option value="1">Sort</option>
                                </select>
                            </div>
                        </div>

                        <hr className="border border-black" />
                        <br />

                        <div className="grid grid-cols-4 gap-2">
                            {allBalenciaga.length > 0 ? (
                                allBalenciaga.map((item) => (
                                    <div key={item.id}>
                                    <Link to={`/balenciaga/details/${item.id}`} ><img src={item.src} alt="" /></Link>
                                    <div className='content'> 
                                        <h3><Link to={`/balenciaga/details/${item.id}`}>{item.title}</Link></h3>
                                        <span>Ksh {item.price}</span>
                                        <p>{item.description}</p>
                                        {cart.some((d) => d.id === item.id) ? (<button onClick={() => {dispatch({type: 'REMOVE_FROM_CART', payload:item})}}  className="w-full border bg-red-600 text-white hover:bg-red-300  py-2 px-4">Remove</button>
                                        ) : (
                                            <button onClick={() => {dispatch({type: 'ADD_TO_CART', payload:item})}}  className="w-full border border-black hover:bg-black hover:text-white py-2 px-4">Add to cart</button>
                                        )}
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
                    </main>
                </div>
            </div>
        </div>
    </>
  )
}

export default BalenciagaProd

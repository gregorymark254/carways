import React from 'react'

const BootsProd = () => {
  return (
    <>
        <div className="text-center p-4">
            <h1>Boots</h1>
            <p>FOOTZY / Boots</p>
        </div>

        <div className="bg-[#f1ebf5]">
            <div className="container mx-auto p-4">
                <div className="md:flex gap-6 ">
                    <section>
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
                    </section>

                    <section>
                        <div className="flex justify-between py-4">
                            <div>
                            <p>Showing all 10</p>
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
                        <div className="grid grid-cols-4 gap-2">
                        
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </>
  )
}

export default BootsProd

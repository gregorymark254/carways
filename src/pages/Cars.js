import React from 'react'
import carData from "../Booking/CarData"
import { FaRegHeart,FaCarAlt,FaGasPump } from "react-icons/fa";
import { TbRoad,TbSteeringWheel } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

const Cars = () => {

  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    navigate("/booking")
  }
  

  return (
    <div className="bg-[#F0F0F0]">
      {/* intro */}
      <section className="mb-20">
        <div className="intro">
          <div className="w-full h-full overflow-hidden bg-fixed">
            <div className="flex items-center h-full">
              <div className="text-white ml-40">
                <h1 className="md:text-6xl font-bold tracking-tight mb-12">Cars</h1>
                <button className="bg-[#4F5DEC] px-5 py-2 rounded-lg">Home // Cars</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* body */}
      <div className="container mx-auto p-4">
        <section>
          <div className="flex flex-wrap justify-between mb-10">
            <div>
              <label htmlFor="">
                <input 
                  type="search" 
                  placeholder="Search"
                  className="block px-2 py-3 w-full mb-4 border border-slate-400 rounded-lg placeholder:text-slate-700 focus:outline-none focus:border-[#4F5DEC]"
                />
              </label>
            </div>
            <div>
              <label htmlFor="">
                <select name="" id="" className="block px-2 py-3 w-full mb-4 border bg-white border-slate-400 rounded-lg focus:outline-none focus:border-[#4F5DEC]">
                  <option value="Sort">Sort by default</option>
                  <option value="Sort">Sort by low price</option>
                  <option value="Sort">Sort by high price</option>
                </select>
              </label>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-wrap items-center gap-8 mb-20">
            {
              carData.length > 0 ? (
                carData.map((cars) => (
                  <div key={cars.id} className="bg-white p-4 rounded-lg">
                    <img className="rounded-xl h-72 object-fit" src={cars.src} alt="car1" />
                    <div>
                      <div className="flex justify-between p-3">
                        <h3><b>{cars.title}</b></h3>
                        <span>5.0</span>
                      </div>
                      <div className="p-2">
                        <div className="flex flex-wrap items-center justify-between mb-4">
                          <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaCarAlt/></span><h5>Model: 2020</h5></div>
                          <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><IoPeople/></span><h5>4 peolpe</h5></div>
                          <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaGasPump/></span><h5>Hybrid</h5></div>
                        </div>
                        <div className="flex flex-wrap items-center justify-between">
                          <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbRoad/></span><h5>10.15km/1-litre</h5></div>
                          <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbSteeringWheel/></span><h5>Automatic</h5></div>
                        </div>
                      </div>
                      <hr />
                      <div className="flex flex-wrap items-center space-x-3 justify-between py-2">
                        <h4><span className="text-xl text-[#4F5DEC]">{cars.amount}</span>/day</h4>
                        <div className="flex items-center space-x-3 mt-2">
                          <span className="bg-[#4f5dec3d] text-[#4F5DEC] p-2 rounded-lg"><FaRegHeart/></span>
                          <button onClick={handleClick} className="bg-[#4F5DEC] text-white px-4 py-2 rounded-lg">Rent Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <span>NO DATA</span>
                </div>
              )
            }
          </div>
        </section>
      </div>
    </div>
  )
}

export default Cars

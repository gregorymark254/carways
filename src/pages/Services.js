import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Services = () => {
  return (
    <main>
      {/* intro */}
      <section className="mb-10">
        <div className="intro">
          <div className="w-full h-full overflow-hidden bg-fixed">
            <div className="flex items-center h-full">
              <div className="text-white ml-40">
                <h1 className="md:text-6xl font-bold tracking-tight mb-12">Services</h1>
                <button className="bg-[#4F5DEC] px-5 py-2 rounded-lg">Home // Services </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* body */}
      <section>
        <div className="container mx-auto p-2 mb-10">
          <div className="text-center mb-10">
            <h4 className="text-[#4F5DEC]"><b>SERVICES</b></h4>
            <h1><b>What We <span className="text-[#4F5DEC]">Offer</span></b></h1>
            <div className="header-divider"></div>
          </div>
          <div className="grid grid-cols-1 gap-6 mb-20 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-5 mb-4 shadow-md shadow-slate-400 space-y-4">
              <div className="flex justify-between">
                <img width={80} height={80} src="https://live.themewild.com/carway/assets/img/icon/car-rent-2.svg" alt="icon" />
                <h1 className="service-count">01</h1>
              </div>
              <h4><b>Car Rentals</b></h4>
              <p>There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.</p>
              <button className="flex items-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg">Read More <span><IoIosArrowRoundForward/></span></button>
            </div>
            <div className="p-4 mb-4 shadow-md shadow-slate-400 space-y-4">
              <div className="flex justify-between">
                <img width={80} height={80} src="https://live.themewild.com/carway/assets/img/icon/airport.svg" alt="icon" />
                <h1 className="service-count">02</h1>
              </div>
              <h4><b>Airport Transfer</b></h4>
              <p>There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.</p>
              <button className="flex items-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg">Read More <span><IoIosArrowRoundForward/></span></button>
            </div>
            <div className="p-4 mb-4 shadow-md shadow-slate-400 space-y-4">
              <div className="flex justify-between">
                <img width={80} height={80} src="https://live.themewild.com/carway/assets/img/icon/airport.svg" alt="icon" />
                <h1 className="service-count">03</h1>
              </div>
              <h4><b>Wedding Ceremony</b></h4>
              <p>There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.</p>
              <button className="flex items-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg">Read More <span><IoIosArrowRoundForward/></span></button>
            </div>
            <div className="p-4 mb-4 shadow-md shadow-slate-400 space-y-4">
              <div className="flex justify-between">
                <img width={80} height={80} src="https://live.themewild.com/carway/assets/img/icon/city-tour.svg" alt="icon" />
                <h1 className="service-count">04</h1>
              </div>
              <h4><b>Whole City Tour</b></h4>
              <p>There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.</p>
              <button className="flex items-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg">Read More <span><IoIosArrowRoundForward/></span></button>
            </div>
            <div className="p-4 mb-4 shadow-md shadow-slate-400 space-y-4">
              <div className="flex justify-between">
                <img width={80} height={80} src="https://live.themewild.com/carway/assets/img/icon/hospital.svg" alt="icon" />
                <h1 className="service-count">05</h1>
              </div>
              <h4><b>Hospital Transfer</b></h4>
              <p>There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.</p>
              <button className="flex items-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg">Read More <span><IoIosArrowRoundForward/></span></button>
            </div>
            <div className="p-4 mb-4 shadow-md shadow-slate-400 space-y-4">
              <div className="flex justify-between">
                <img width={80} height={80} src="https://live.themewild.com/carway/assets/img/icon/baggage.svg" alt="icon" />
                <h1 className="service-count">06</h1>
              </div>
              <h4><b>Luggage Transport</b></h4>
              <p>There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.</p>
              <button className="flex items-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg">Read More <span><IoIosArrowRoundForward/></span></button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services

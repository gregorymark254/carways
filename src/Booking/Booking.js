import React, { useState  }  from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "../api/api"
import { BookingState } from '../Context/BookingContext'

const URL = "/api/v3/add"


const Booking = () => {

  const [car,setCar] = useState('')
  const [pickLocation,setPicklocation] = useState('')
  const [dropLocation,setDroplocation] = useState('')
  const [pickDate,setPickdate] = useState('')
  const [pickTime,setpicktime] = useState('')
  const [dropDate,setDropdate] = useState('')
  const [dropTime,setDroptime] = useState('')
  const [duration,setDuration] = useState('')
  const [quantity,setQuantity] = useState('')
  const [people,setPeople] = useState('')
  const [services,setService] = useState('')
  const navigate = useNavigate();

  const { state : { cart : { cartItems } } } = BookingState()
 

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(URL,
      JSON.stringify({car,pickLocation,dropLocation,pickDate,pickTime,dropDate,dropTime,duration,quantity,people,services}),
    {
      headers : { 'Content-type' : 'application/json'},
      withCredentials : true
    });
    toast.success("Added Successful")
    navigate('/checkout')
    } catch (error) {
      if (!error?.response) {
        toast.error('No Server Response');
      } else if (error.response?.status === 400) {
        toast.error('All fields are required');
      } else if (error.response?.status === 409) {
        toast.error('Car Taken');
      } else {
        toast.error('Booking Failed')
      }
      console.log(error)
      console.log(error.response)
    }
  }


 


  return (
    <div className="bg-[#F0F0F0]">
      {/* intro */}
      <section className="mb-20">
        <div className="intro">
          <div className="w-full h-full overflow-hidden bg-fixed">
            <div className="flex items-center h-full">
              <div className="text-white ml-40">
                <h1 className="md:text-6xl font-bold tracking-tight mb-12">Car Booking</h1>
                <button className="bg-[#4F5DEC] px-5 py-2 rounded-lg">Home // Car Booking</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4">
        {/* Car Booking */}
        <form onSubmit={handleSubmit}>
          <div className="md:flex flex-wrap justify-center gap-10 mb-20">
            <div className="bg-white p-6 rounded-xl xl:w-1/4 mb-3">
              <h4><b>Booking Car Type</b></h4>
              {
                cartItems.map((car) => (
                  <div key={car._id}>
                    <img className=" rounded-lg" src={car.src} alt="selected car" />
                    <h4>{car.title}</h4>
                    <h5><span className="text-blue-700">{car.amount}</span>/month</h5>
                  </div>
                ))
              }           
              <br />
              <div>
                <label htmlFor="">Your Perfect Car
                  <input 
                    type="text" 
                    required
                    placeholder="Type car,model,brand"
                    className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                    value={car}
                    onChange = {(e) => setCar(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">Pick Up Location
                  <input 
                    type="text" 
                    required
                    placeholder="Type city,airport,station"
                    className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                    value={pickLocation}
                    onChange = {(e) => setPicklocation(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">Drop Off Location
                  <input 
                    type="text" 
                    required
                    placeholder="Type city,airport,station"
                    className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                    value={dropLocation}
                    onChange = {(e) => setDroplocation(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">Pick Up Date
                  <input 
                    type="date" 
                    required
                    className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                    value={pickDate}
                    onChange = {(e) => setPickdate(e.target.value) }
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">Pick Up Time
                  <input 
                    type="time" 
                    required
                    className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                    value={pickTime}
                    onChange = {(e) => setpicktime(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">Drop Off Date
                  <input 
                    type="date" 
                    required
                    className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                    value={dropDate}
                    onChange = {(e) => setDropdate(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">Drop Off Time
                  <input 
                    type="time" 
                    required
                    className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                    value={dropTime}
                    onChange = {(e) => setDroptime(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl xl:w-1/2 h-1/2">
              <h4><b>Booking Info</b></h4>
              <br />
              <div className="md:flex justify-center">
                <div className="w-full p-1">
                  <label htmlFor="">Car Rent Duration
                    <select name="duration" id="duration" required
                      value={duration}
                      onChange = {(e) => setDuration(e.target.value)}
                      className="block px-2 py-3 w-full mb-4 border bg-white border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]">
                      <option value="1 Month">For 1 month</option>
                      <option value="1 Day">For 1 day</option>
                      <option value="5 Days">For 5 days</option>
                      <option value="10 Days">For 10 days</option>
                      <option value="15 Days">For 15 days</option>
                    </select>
                  </label>
                </div>
                <div className="w-full p-1">
                  <label htmlFor="">Car Rent Quantity
                    <select name="car" id="car" required
                      value={quantity}
                      onChange = {(e) => setQuantity(e.target.value)}
                      className="block px-2 py-3 w-full mb-4 border bg-white border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]">
                      <option value="1 Car">1 Car</option>
                      <option value="2 Cars">2 Cars</option>
                      <option value="3 Cars">3 Cars</option>
                      <option value="4 Cars">4 Cars</option>
                      <option value="5 Cars">5 Cars</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="md:flex justify-center">
                <div className="w-full p-1">
                  <label htmlFor="">Choose People
                    <select name="people" id="people" required
                      value={people}
                      onChange = {(e) => setPeople(e.target.value)}
                      className="block px-2 py-3 w-full mb-4 border bg-white border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]">
                      <option value="1 person">1 person</option>
                      <option value="2 People">2 people</option>
                      <option value="3 People">3 people</option>
                      <option value="4 People">4 people</option>
                    </select>
                  </label>
                </div>
                <div className="w-full p-1">
                  <label htmlFor="">Need Driving Service?
                    <select name="service" id="service" required              
                      value={services}
                      onChange = {(e) => setService(e.target.value)}
                      className="block px-2 py-3 w-full mb-4 border bg-white border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]">
                      <option value="No">No</option>
                      <option value="Yes">Yes(pay extra Ksh.1000)</option>
                    </select>
                  </label>
                </div>
              </div>
              <div>
                <button className="flex items-center justify-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg w-full">Check Out<h3><IoIosArrowRoundForward/></h3></button>
              </div>
            </div>
          </div>
        </form>
      </section>
      
    </div>
  )
}

export default Booking

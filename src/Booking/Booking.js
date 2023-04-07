import React,{useState}  from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { BookingState } from '../Context/BookingContext'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios"

const Booking = () => {

  const { state : {booking} } = BookingState()
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:4000/api/v3/add',
      JSON.stringify({car,pickLocation,dropLocation,pickDate,dropDate,dropTime,duration,quantity,people,services}),
    {
      headers : { 'Content-type' : 'application/json'},
      withCredentials : true
    });
    console.log(JSON.stringify(response))
    console.log(response?.data)
    console.log(response?.accessToken)
    toast.success("Added Successfull")
    navigate('/checkout')
    } catch (error) {
      if (!error?.response) {
        toast.error('No Server Response');
      } else if (error.response?.status === 400) {
        toast.error('All fields are required');
      } else if (error.response?.status === 409) {
        toast.error('Username Taken');
      } else {
        toast.error('Registration Failed')
      }
      console.log(error)
      console.log(error.response)
    }
  }

  return (
    <div>
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

      <div className="container mx-auto">
        {/* Car Booking */}
        <section>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3><b>Booking Car</b></h3>
              {
                booking.map((cars) => (
                  <div key={cars.id} className="p-4">
                    <img className="rounded-xl " src={cars.src} alt="cars" />
                  </div>
                ))
              }
              <form onSubmit={handleSubmit}>
                <div className="w-1/2 mr-4">
                  <label htmlFor="">Your Perfect Car
                    <input 
                      type="text" 
                      required
                      placeholder="Type car,model,brand"
                      className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      value={car}
                      onChange = { (e) => setCar(e.target.value) }
                    />
                  </label>
                </div>
                <div className="w-1/2 mr-4">
                  <label htmlFor="">Pick Up Location
                    <input 
                      type="text" 
                      required
                      placeholder="Type city,airport,station"
                      className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      value={pickLocation}
                      onChange = { (e) => setPicklocation(e.target.value) }
                    />
                  </label>
                </div>
                <div className="w-1/2 ">
                  <label htmlFor="">Drop Off Location
                    <input 
                      type="text" 
                      required
                      placeholder="Type city,airport,station"
                      className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      value={dropLocation}
                      onChange = { (e) => setDroplocation(e.target.value) }
                    />
                  </label>
                </div>
                <div className="w-1/2 mr-2">
                  <label htmlFor="">Pick Up Date
                    <input 
                      type="date" 
                      required
                      className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      value={pickDate}
                      onChange = { (e) => setPickdate(e.target.value) }
                    />
                  </label>
                </div>
                <div className="w-1/2 mr-4">
                  <label htmlFor="">Pick Up Time
                    <input 
                      type="time" 
                      required
                      placeholder="Type city,airport,station"
                      className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      value={pickTime}
                      onChange = { (e) => setpicktime(e.target.value) }
                    />
                  </label>
                </div>
                <div className="w-1/2 mr-4">
                  <label htmlFor="">Drop Off Date
                    <input 
                      type="date" 
                      required
                      className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      value={dropDate}
                      onChange = { (e) => setDropdate(e.target.value) }
                    />
                  </label>
                </div>
                <div className="w-1/2 mr-2">
                  <label htmlFor="">Drop Off Time
                    <input 
                      type="time" 
                      required
                      placeholder="Type city,airport,station"
                      className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      value={dropTime}
                      onChange = { (e) => setDroptime(e.target.value) }
                    />
                  </label>
                </div>
              </form>
            </div>
            <div>
              <h3><b>Booking Info</b></h3>
              <form onSubmit={handleSubmit}>
                <div className="flex ">
                  <div className="w-full mr-3">
                    <label htmlFor="">Car Rent Duration
                      <select 
                        name="" id="" 
                        value={duration}
                        onChange = { (e) => setDuration(e.target.value) }
                        className="block px-2 py-3 w-full mb-4 border bg-white border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]">
                        <option value="1 mnth">For 1 month</option>
                        <option value="1 day">For 1 day</option>
                        <option value="5 Days">For 5 days</option>
                        <option value="10 Days">For 10 days</option>
                        <option value="15 Days">For 15 days</option>
                      </select>
                    </label>
                  </div>
                  <div className="w-full mr-3">
                    <label htmlFor="">Car Rent Quantity
                      <select 
                        name="" id="" 
                        value={quantity}
                        onChange = { (e) => setQuantity(e.target.value) }
                        className="block px-2 py-3 w-full mb-4 border bg-white border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]">
                        <option value="1">1 Car</option>
                        <option value="2">2 Cars</option>
                        <option value="3">3 Cars</option>
                        <option value="4">4 Cars</option>
                        <option value="5">5 Cars</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full mr-3">
                    <label htmlFor="">Choose People
                      <select 
                        name="" id="" 
                        value={people}
                        onChange = { (e) => setPeople(e.target.value) }
                        className="block px-2 py-3 w-full mb-4 border bg-white border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]">
                        <option value="1 person">1 person</option>
                        <option value="2 people">2 people</option>
                        <option value="3 people">3 people</option>
                        <option value="4 people">4 people</option>
                      </select>
                    </label>
                  </div>
                  <div className="w-full mr-3">
                    <label htmlFor="">Need Driving Service?
                      <select 
                        name="" id="" 
                        value={services}
                        onChange = { (e) => setService(e.target.value) }
                        className="block px-2 py-3 w-full mb-4 border bg-white border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]">
                        <option value="No">No</option>
                        <option value="Yes">Yes(pay extra $100)</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div>
                  <button className="flex items-center justify-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg w-full">Check Out<h3><IoIosArrowRoundForward/></h3></button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      
    </div>
  )
}

export default Booking

import React,{useState}  from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "../api/api"
import { BookingState } from '../Context/BookingContext'

const URL = '/api/v2/add'

const Checkout = () => {

  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [cardName, setCardname] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setexpirydate] = useState('')
  const [cvv, setCvv] = useState('')
  const [additionalNote, setAdditional] = useState('')
  const navigate = useNavigate();
  const { dispatch } = BookingState()

  const item = localStorage.getItem('bookingInfo');
  const parsedItem = JSON.parse(item);

  const handleSubmit = async (e) => {
    e.preventDefault()  
    try {
      const response = await axios.post(URL, 
      JSON.stringify({firstName,lastName ,email,phone ,address ,address2 ,city ,state ,zip,cardName,cardNumber,expiryDate ,cvv,additionalNote}),
      {
        headers : { 'Content-type' : 'application/json'},
        withCredentials : true
      });
      dispatch({type:'CHECKOUT'})
      toast.success("Added Successfull")
      console.log(response)
      navigate('/confirmBooking')
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
    <div className="bg-[#F0F0F0]">
      {/* intro */}
      <section className="mb-20">
        <div className="intro">
          <div className="w-full h-full overflow-hidden bg-fixed">
            <div className="flex items-center h-full">
              <div className="text-white ml-40">
                <h1 className="md:text-6xl font-bold tracking-tight mb-12">Car Checkout</h1>
                <button className="bg-[#4F5DEC] px-5 py-2 rounded-lg">Home // Car Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* checkout */}
      <section>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-10 ">
            <div className="bg-white p-6 rounded-xl w-full h-full xl:w-1/4">
              <div className="space-y-2 py-4">
                <h5><b>Car info</b></h5>
                <div className="flex justify-between">
                  <p>Car </p>
                  <p>{parsedItem.car}</p>
                </div>
                <div className="flex justify-between">  
                  <p>Rent</p>
                  <p>{parsedItem.quantity}</p>
                </div>
                <div className="flex justify-between"> 
                  <p>People</p>
                  <p>{parsedItem.people}</p>
                </div>
                <div className="flex justify-between">
                  <p>Driving services</p>
                  <p>{parsedItem.services}</p>
                </div>
                <hr />
              </div>
              <div className="space-y-2 py-4">
                <h5><b>Rent Date & Time</b></h5>
                <div className="flex justify-between">
                  <p>From </p>
                  <p>{parsedItem.pickDate}</p>
                </div>
                <div className="flex justify-between">
                  <p>To </p>
                  <p>{parsedItem.dropDate}</p>
                </div>
                <div className="flex justify-between">
                  <p>Duration</p>
                  <p>{parsedItem.duration}</p>
                </div>
                <hr />
              </div>
              <div className="space-y-2 py-4">
                <h5><b>Rent Location</b></h5>
                <div className="flex justify-between">
                  <p>Pick up </p>
                  <p>{parsedItem.pickLocation}</p>
                </div>
                <div className="flex justify-between">
                  <p>Drop off </p>
                  <p>{parsedItem.dropLocation}</p>
                </div>
                <hr />
              </div>
              <div className="space-y-2 py-4">
                <h5><b>Extra Services</b></h5>
                <div>Extra Service One</div>
                <div>Extra Service two</div>
                <hr />
              </div>
              <div className="space-y-2 py-4">
                <h5><b>Payment Summery</b></h5>
                <div className="flex justify-between">
                   
                  <p>1xGps </p>
                  <p>Ksh.3,000</p>
                </div>
                <div className="flex justify-between">
                  <p>Insurance Fee</p>
                  <p>$12</p>
                </div>
                <div className="flex justify-between">
                  <p>Transfer Fee</p>
                  <p>$1</p>
                </div>
                <div className="flex justify-between">
                  <p>Disposition Fee</p>
                  <p>$23</p>
                </div>
                <div className="flex justify-between">
                  <p>Driving Fee</p>
                  <p>$3</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax Fee </p>
                  <p>10%</p>
                </div>
                <hr />
              </div>
              <div className="flex justify-between py-4">
                <h5><b>Total Pay </b></h5>
                <h5 className="text-blue-800 text-xl">Ksh.3000</h5>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl mb-20">
              <h3><b>Billing Info</b></h3>
              <br />
              <form onSubmit={handleSubmit}>
                <div className="md:flex">
                  <div className="w-full p-1">
                    <label htmlFor="">First Name
                      <input 
                        type="text" 
                        required
                        placeholder="Your First Name"
                        value={firstName}
                        onChange = {(e) => setFirstname(e.target.value)}
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-full p-1">
                    <label htmlFor="">Last Name
                      <input 
                        type="text" 
                        required
                        placeholder="Your Last Name"
                        value={lastName}
                        onChange = {(e) => setLastname(e.target.value)}
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="w-full p-1">
                    <label htmlFor="">Email
                      <input 
                        type="email" 
                        required
                        placeholder="Your Email"
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-full p-1">
                    <label htmlFor="">Phone
                      <input 
                        type="number" 
                        required
                        placeholder="You phone number"
                        value={phone}
                        onChange = {(e) => setPhone(e.target.value)}
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                </div>
                <div className="w-full p-1">
                  <label htmlFor="">Address
                    <input 
                      type="text" 
                      required
                      placeholder="Your Address"
                      value={address}
                      onChange = {(e) => setAddress(e.target.value)}
                      className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                    />
                  </label>
                </div>
                <div className="w-full p-1">
                  <label htmlFor="">Address 2
                    <input 
                      type="text" 
                      placeholder="Your Address 2"
                      value={address2}
                      onChange = {(e) => setAddress2(e.target.value)}
                      className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                    />
                  </label>
                </div>
                <div className="md:flex">
                  <div className="p-1 w-full md:w-1/2">
                    <label htmlFor="">City
                      <input 
                        type="text" 
                        required
                        placeholder="Your City"
                        value={city}
                        onChange = {(e) => setCity(e.target.value)}
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="p-1 w-full md:w-1/2">
                    <label htmlFor="">State
                      <input 
                        type="text" 
                        required
                        placeholder="You State"
                        value={state}
                        onChange = {(e) => setState(e.target.value)}
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="p-1 w-full md:w-1/2">
                    <label htmlFor="">Zip
                      <input 
                        type="text" 
                        placeholder="You zip(Optional)"
                        value={zip}
                        onChange = {(e) => setZip(e.target.value)}
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                </div>
                <h3><b>Payment Info</b></h3>
                <div className="md:flex">
                  <div className="w-full p-1">
                    <label htmlFor="">Card Holder Name
                      <input 
                        type="text" 
                        required
                        placeholder="Name on Card"
                        value={cardName}
                        onChange = {(e) => setCardname(e.target.value)}
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-full p-1">
                    <label htmlFor="">Card Number
                      <input 
                        type="number" 
                        required
                        value={cardNumber}
                        onChange = {(e) => setCardNumber(e.target.value)}
                        placeholder="Your Card Number"
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="w-full p-1">
                    <label htmlFor="">Expiry Date
                      <input 
                        type="date" 
                        required
                        value={expiryDate}
                        onChange = {(e) => setexpirydate(e.target.value) }
                        placeholder="Expiry Date"
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-full p-1">
                    <label htmlFor="">CVV
                      <input 
                        type="number" 
                        required
                        value={cvv}
                        onChange = {(e) => setCvv(e.target.value)}
                        placeholder="CVV"
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                </div>
                <div className="w-full p-1">
                  <label htmlFor="">
                    <textarea 
                      name="" id="" 
                      cols="30" rows="10"
                      value={additionalNote}
                      onChange = {(e) => setAdditional(e.target.value)}
                      placeholder="Write Note(Optional)"
                      className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                    ></textarea>
                  </label>
                </div>
                <div>
                  <button className="flex items-center justify-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg w-full">Confirm Booking<h3><IoIosArrowRoundForward/></h3></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Checkout

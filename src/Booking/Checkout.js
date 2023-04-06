import React,{useState}  from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios"


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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:4000/api/v2/add',
      JSON.stringify({firstName,lastName,email,phone,address,address2,city,state,zip,cardName,cardNumber,expiryDate,cvv,additionalNote}),
    {
      headers : { 'Content-type' : 'application/json'},
      withCredentials : true
    });
    console.log(JSON.stringify(response))
    console.log(response?.data)
    console.log(response?.accessToken)
    toast.success("Added Successfull")
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
    <div>
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
          <div className="grid grid-cols-2 gap-4 p-6">
            <div className="w-1/2">
              <div className="space-y-2">
                <h5><b>Car info</b></h5>
                <p>Car : Toyota</p>
                <p>Rent  : 1 car</p>
                <p>People : 2 people</p>
                <p>Driving services : No</p>
                <hr />
              </div>
              <div className="space-y-2">
                <h5><b>Rent Date & Time</b></h5>
                <p>From : 21/01/2023</p>
                <p>To : 25/01/2023</p>
                <p>Duration : 10 days</p>
                <hr />
              </div>
              <div className="space-y-2">
                <h5><b>Rent Location</b></h5>
                <p>Pick up : Nairobi</p>
                <p>Drop off : Nakuru</p>
                <hr />
              </div>
              <div className="space-y-2">
                <h5><b>Extra Services</b></h5>
                <p>Extra Service One</p>
                <p>Extra Service two</p>
                <hr />
              </div>
              <div className="space-y-2">
                <h5><b>Payment Summery</b></h5>
                <p>1xGps : $2</p>
                <p>Insurance Fee : $12</p>
                <p>Transfer Fee : $1</p>
                <p>Disposition Fee : $23</p>
                <p>Driving Fee : $3</p>
                <p>Tax Fee : 10%</p>
                <hr />
              </div>
              <div className="flex">
                <h5><b>Total Pay :</b></h5>
                <h5>$390</h5>
              </div>
            </div>
            <div>
              <h3><b>Billing Info</b></h3>
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <div className="w-full mr-4">
                    <label htmlFor="">First Name
                      <input 
                        type="text" 
                        required
                        placeholder="Your First Name"
                        value={firstName}
                        onChange = { (e) => setFirstname(e.target.value) }
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-full">
                    <label htmlFor="">Last Name
                      <input 
                        type="text" 
                        required
                        placeholder="Your Last Name"
                        value={lastName}
                        onChange = { (e) => setLastname(e.target.value) }
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full mr-4">
                    <label htmlFor="">Email
                      <input 
                        type="email" 
                        required
                        placeholder="Your Email"
                        value={email}
                        onChange = { (e) => setEmail(e.target.value) }
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-full">
                    <label htmlFor="">Phone
                      <input 
                        type="text" 
                        required
                        placeholder="You phone number"
                        value={phone}
                        onChange = { (e) => setPhone(e.target.value) }
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="">Address
                    <input 
                      type="text" 
                      required
                      placeholder="Your Address"
                      value={address}
                      onChange = { (e) => setAddress(e.target.value) }
                      className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                    />
                  </label>
                </div>
                <div className="w-full">
                  <label htmlFor="">Address 2
                    <input 
                      type="text" 
                      placeholder="Your Address 2"
                      value={address2}
                      onChange = { (e) => setAddress2(e.target.value) }
                      className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                    />
                  </label>
                </div>
                <div className="flex">
                  <div className="w-1/2 mr-4">
                    <label htmlFor="">City
                      <input 
                        type="text" 
                        required
                        placeholder="Your City"
                        value={city}
                        onChange = { (e) => setCity(e.target.value) }
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-1/2 mr-2">
                    <label htmlFor="">State
                      <input 
                        type="text" 
                        required
                        placeholder="You State"
                        value={state}
                        onChange = { (e) => setState(e.target.value) }
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="">Zip
                      <input 
                        type="text" 
                        required
                        placeholder="You zip"
                        value={zip}
                        onChange = { (e) => setZip(e.target.value) }
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                </div>
                <h3><b>Payment Info</b></h3>
                <div className="flex">
                  <div className="w-full mr-4">
                    <label htmlFor="">Card Holder Name
                      <input 
                        type="text" 
                        required
                        placeholder="Name on Card"
                        value={cardName}
                        onChange = { (e) => setCardname(e.target.value) }
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-full">
                    <label htmlFor="">Card Number
                      <input 
                        type="text" 
                        required
                        value={cardNumber}
                        onChange = { (e) => setCardNumber(e.target.value) }
                        placeholder="Your Card Number"
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full mr-4">
                    <label htmlFor="">Expiry Date
                      <input 
                        type="text" 
                        required
                        value={expiryDate}
                        onChange = { (e) => setexpirydate(e.target.value) }
                        placeholder="Expiry Date"
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-full">
                    <label htmlFor="">CVV
                      <input 
                        type="text" 
                        required
                        value={cvv}
                        onChange = { (e) => setCvv(e.target.value) }
                        placeholder="CVV"
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="">
                    <textarea 
                      name="" id="" 
                      cols="30" rows="10"
                      value={additionalNote}
                      onChange = { (e) => setAdditional(e.target.value) }
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

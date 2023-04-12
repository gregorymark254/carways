import React,{ useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from '../api/api'

const URL = '/api/v1/register'

const Register = () => {

  const [firstName,setFirstname] = useState('')
  const [lastName,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    } 
    try {
      await axios.post(URL,
      JSON.stringify({ firstName, lastName, email, phone, password }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      toast.success("Registration Successful");
      navigate("/login");
    } catch (error) {
      if (!error?.response) {
        toast.error("No Server Response");
      } else if (error.response?.status === 400) {
        toast.error("All fields are required");
      } else if (error.response?.status === 409) {
        toast.error("Email Taken");
      } else {
        toast.error("Registration Failed");
      }
      console.log(error);
    }
  };



  return (
    <div className="bg-blue-100">
      <div className="container mx-auto min-h-screen"> 
        <div className="flex items-center justify-center">
          <div className="bg-white p-4 mt-20 rounded-lg">
            <form onSubmit={handleSubmit}>
              <label htmlFor="">
                <input 
                  type="text" 
                  placeholder="Your First Name"
                  required
                  className="block px-2 py-3 mb-4 w-full border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                  value={firstName}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <input 
                  type="text" 
                  placeholder="Your Last Name"
                  required
                  className="block px-2 py-3 mb-4 w-full border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <input 
                  type="email" 
                  placeholder="Your Email"
                  required
                  className="block px-2 py-3 mb-4 w-full border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <input 
                  type="number" 
                  placeholder="Your Phone Number"
                  required
                  className="block px-2 py-3 mb-4 w-full border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <input 
                  type="password" 
                  placeholder="Password"
                  required
                  className="block px-2 py-3 mb-4 w-full border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label htmlFor="">
                <input 
                  type="password" 
                  placeholder="Confirm Password"
                  required
                  className="block px-2 py-3 mb-4 w-full border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>
              <button className="px-5 py-2 bg-[#4F5DEC] text-white rounded-xl">Sign Up</button>
            </form>
            <br />
            <span>Already have an account? <a href="/login" className="text-blue-600"><u>Sign In</u></a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

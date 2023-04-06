import React,{ useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from '../api/api'

const auth = '/api/v1/register'

const Register = () => {

  const [firstName,setFirstname] = useState('')
  const [lastName,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Password and confirm password do not match');
      return
    } 
    try {
      const response = await axios.post(auth,
      JSON.stringify({ firstName,lastName,email,phone,password }),
      {
        headers: {'Content-Type' : 'application/json'},
        withCredential : true
      })
      console.log(JSON.stringify(response.data))
      console.log(response?.data)
      console.log(response?.accessToken)
      toast.success("Registration Succesfull")
      navigate('/login')
      console.log(response?.data)
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
      toast.error("Registration Failed")
    }
  }


  return (
    <div>
      <div className="container mx-auto min-h-screen"> 
        <div className="flex items-center justify-center">
          <div>
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
                  type="text" 
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
              <button className="px-4 py-2 bg-[#4F5DEC] text-white rounded-xl">Login</button>
            </form>
            <span>Already have an account? <a href="/login">Sign In</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

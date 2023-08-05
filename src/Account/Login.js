import React,{ useState, useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from '../api/api'
import { BookingState } from '../Context/BookingContext'

const URL = '/api/v1/login'


const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const { state : { userInfo }, dispatch } = BookingState()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(URL,
      JSON.stringify({email,password}),
      {
        headers: {'Content-Type' : 'application/json'},
        withCredential : true
      })
      dispatch({type:'USER_SIGNIN', payload:response.data})
      localStorage.setItem('userInfo', JSON.stringify(response.data))
      const isAdmin = response?.data?.isAdmin
      if (isAdmin === true) {
        navigate("/admin")
      } else {
        navigate("/")
      }
      toast.success("Login Succesful")
    } catch (error) {
      console.log(error)
      console.log(error?.response)
      toast.error("Wrong username or password")
    }
  }

  useEffect(() => {
    if(userInfo){
      navigate(redirect)
    }
  },[navigate, redirect, userInfo])



  return (
    <div className="bg-blue-100">
      <div className="container mx-auto min-h-screen">
        <div className="flex items-center justify-center">
          <div className="bg-white p-8 mt-20 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="text-center p-4 space-y-2">
                <h2>Welcome Back !</h2>
                <p>Log in to your account.</p>
              </div>
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
                  type="password" 
                  placeholder="Password"
                  required
                  className="block px-2 py-3 mb-4 w-full border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button className="px-4 py-2 bg-[#4F5DEC] hover:bg-[#6f79f0] text-white rounded-xl">Login</button>
            </form>
            <br />
            <span>Don't have an account? <a href="/register" className="text-blue-600 hover:text-[#6f79f0]"><u>Register Here</u></a></span>
          </div>
        </div>
        <div>
            <h4>Admin login</h4>
            <p>email:greg@gmail.com</p>
            <p>password:12345</p>
          </div>
      </div>
    </div>
  )
}

export default Login

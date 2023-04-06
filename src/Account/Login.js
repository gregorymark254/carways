import React,{ useState, useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from '../api/api'
import { BookingState } from '../Context/BookingContext'


const auth = "/api/v1/login"

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
      const response = await axios.post(auth,
      JSON.stringify({email,password}),
      {
        headers: {'Content-Type' : 'application/json'},
        withCredential : true
      })
      dispatch({type:'USER_SIGNIN', payload:response.data})
      localStorage.setItem('userInfo', JSON.stringify(response.data))
      toast.success("Login Succesful")
      navigate('/')
      console.log(response?.data)
    } catch (error) {
      console.log(error)
      toast.error("Wrong username or password")
    }
  }

  useEffect(() => {
    if(userInfo){
      navigate(redirect)
    }
  },[navigate, redirect, userInfo])

  return (
    <div>
      <div className="container mx-auto min-h-screen">
        <div className="flex items-center justify-center mt-20">
          <div>
            <form onSubmit={handleSubmit}>
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
              <button className="px-4 py-2 bg-[#4F5DEC] text-white rounded-xl">Login</button>
            </form>
            <span>Don't have an account? <a href="/register">Register Here</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

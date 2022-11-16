import React,{ useState, useEffect }  from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from '../../api/api'
import { CartState } from '../context/ProductContext'
import { toast } from 'react-toastify'

const REG_URL = "/api/auth/login"

const Login = () => {

  const { state, dispatch } = CartState()
  const navigate = useNavigate()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'
  const { userInfo } = state

  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(REG_URL,
      JSON.stringify({email,password}),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      dispatch({type:'USER_SIGNIN', payload:response})
      localStorage.setItem('userInfo', JSON.stringify(response))
      toast.success('Login Successful')
      navigate('/cart')
      console.log(response?.data);
    } catch (error) {
      console.log(error)
      toast.error("wrong Username or email")
    }
  }

  useEffect(() => {
    if(userInfo){
      navigate(redirect)
    }
  },[navigate, redirect, userInfo])
 
  return (
    <main>
      <div className="text-center p-4">
        <h1>Login</h1>
        <p>FOOTZY / Login</p>
      </div>

      <div className="bg-[#f1ebf5]">
        <div className="container mx-auto p-4 h-screen">
          <div className="bg-white rounded-lg">    
            <div className="grid grid-cols-1 place-items-center py-6">
              <h2>Welcome Back</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="">Email Address <br />
                  <input 
                    type="text" 
                    required
                    placeholder="Email Address*"
                    className="py-2 px-4 my-2 bg-[#f1ebf5] border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500   rounded-md focus:ring-1"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </label> <br />
                <label htmlFor="">Password <br />
                  <input 
                    type="password" 
                    required
                    placeholder="Password*"
                    className="py-2 px-4 my-2 bg-[#f1ebf5] border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  /> <br />
                </label>
                <button className="py-2 px-4 mb-3 w-full bg-orange-400">Login</button>
                <br />  
                <p>Do not have an account? <Link to="/register"><u>Sign Up</u></Link></p>
               <div className="text-center p-2">
                <p>Or</p>
                <button className="w-full py-2 px-4 bg-blue-600 text-white ">Continue with Google</button>
               </div>
              </form>
            </div> 
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login

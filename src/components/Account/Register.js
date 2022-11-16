import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from '../../api/api'

const REG_URL = "/api/auth/register"

const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [matchPassword , setMatchPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== matchPassword){
      alert("Passwords do not match")
      return
    }

    try {
      const response = await axios.post(REG_URL,
      JSON.stringify({username,email,password}),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response))
      toast.success("Registration sucessful")
    } catch (error) {
      console.log(error)
      console.log("error")
      toast.error(error)
    }
  }

  return (
    <>
      <div className="text-center p-4">
        <h1>Register</h1>
        <p>FOOTZY / Register</p> 
      </div>

      <div className="bg-[#f1ebf5] py-8">
        <div className="container mx-auto p-4">
          <div className="bg-white rounded-lg">
          <div className="grid grid-cols-1 place-items-center py-6">
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="">Username<br />
                    <input 
                      type="text" 
                      required
                      placeholder="Username*"
                      className="py-2 px-4 my-2 bg-[#f1ebf5] border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500   rounded-md focus:ring-1"
                      autoComplete="off"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    />
                  </label> <br />
                  <label htmlFor="">Email Address <br />
                    <input 
                      type="email" 
                      required
                      placeholder="Email Address*"
                      className="py-2 px-4 my-2 bg-[#f1ebf5] border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500   rounded-md focus:ring-1"
                      autoComplete="off"
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
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    /> <br />
                  </label>
                  <label htmlFor="">Confirm Password <br />
                      <input 
                        type="password" 
                        required
                        placeholder="Password*"
                        className="py-2 px-4 my-2 bg-[#f1ebf5] border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1"
                        onChange={(e) => setMatchPassword(e.target.value)}
                        value={matchPassword}
                      /> <br />
                  </label>
                  <button className="py-2 px-4 mb-3 w-full bg-orange-400">SignUp</button>
                  <br />  
                  <p>Already have a account? <Link to="/login"><u>Login</u></Link></p>
                </form>
              </div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Register

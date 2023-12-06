import React, { useState, useEffect } from "react";
import axios from "../api/api";
import { useNavigate, useParams } from "react-router-dom";


const Profile = () => {

  const [firstName,setFirstname] = useState('')
  const [lastName,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const navigate = useNavigate();
  const { id } = useParams();

  const getUserById = async () => {
    const response = await axios.get(`/api/v1/users/${id}`);
    setFirstname(response.data.firstName);
    setLastname(response.data.lastName);
    setEmail(response.data.email);
    setPhone(response.data.phone);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/v1/users/update/${id}`,{
        firstName,
        lastName,
        email,
        phone
      });
      navigate("/users");
    } catch (error) {
      console.log(error)
    }
  }
 
  useEffect(() => {
    getUserById();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="container mx-auto min-h-screen">
        <div className="">
          <h4>Update Profile info</h4>
          <hr />
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="md:flex">
              <div className="mr-2">
                <label htmlFor="">First Name
                  <input 
                    type="text" 
                    placeholder="Your First Names"
                    required
                    value={firstName}
                    onChange = { (e) => setFirstname(e.target.value) }
                    className="block px-2 py-3 mb-4 w-full border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                  />
                </label>
              </div>
              <div className="">
                <label htmlFor="">Last Name
                  <input 
                    type="text" 
                    placeholder="Your Last Names"
                    required
                    value={lastName}
                    onChange = { (e) => setLastname(e.target.value) }
                    className="block px-2 py-3 mb-4 w-full border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                  />
                </label>
              </div>
            </div>
            <div className="md:flex">
              <div className=" mr-2">
                <label htmlFor="">Email
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    requiredvalue={email}
                    onChange = { (e) => setEmail(e.target.value) }
                    className="block px-2 py-3 mb-4 w-full border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                  />
                </label>
              </div>
              <div className="">
                <label htmlFor="">Phone
                  <input 
                    type="text" 
                    placeholder="Your Phone No."
                    required
                    value={phone}
                    onChange = { (e) => setPhone(e.target.value) }
                    className="block px-2 py-3 mb-4 w-full border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                  />
                </label>
              </div>
            </div>
            <div>
              <button className="bg-[#4F5DEC] text-white px-4 py-2 rounded-xl">Update Profile Info</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile

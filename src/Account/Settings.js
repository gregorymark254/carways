import React from 'react'

const Settings = () => {
  return (
    <div>
      <div className="container mx-auto min-h-screen">
        <div className="">
          <h4>Update Profile info</h4>
          <hr />
        </div>
        <div className="p-4">
          <form action="">
            <div className="md:flex">
              <div className="mr-2">
                <label htmlFor="">First Name
                  <input 
                    type="text" 
                    placeholder="Your First Names"
                    required
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
                    required
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

export default Settings

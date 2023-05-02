import React, {useState} from 'react'
import { MdAccessTime,MdOutlineMarkEmailRead,MdOutlineLocationOn,MdSend } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { toast } from 'react-toastify';
import axios from "../api/api"

const URL = "/api/v4/send-email"

const Contact = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [subject,setSubject] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(URL,
      JSON.stringify({name,email,subject,message}),
    {
      headers : { 'Content-type' : 'application/json'},
      withCredentials : true
    });
    toast.success("Email Sent Successfully")
    } catch (error) {
      if (!error?.response) {
        toast.error('No Server Response');
      } else if (error.response?.status === 400) {
        toast.error('All fields are required');
      } else {
        toast.error('Sending Failed')
      }
      console.log(error)
      console.log(error.response)
    }
  }

  return (
    <main>
      {/* intro */}
      <section className="mb-10">
        <div className="intro">
          <div className="w-full h-full overflow-hidden bg-fixed">
            <div className="flex items-center h-full">
              <div className="text-white ml-40">
                <h1 className="md:text-6xl font-bold tracking-tight mb-12">Contacts</h1>
                <button className="bg-[#4F5DEC] px-5 py-2 rounded-lg">Home // Contacts </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* address */}
      <section>
        <div className="container mx-auto p-4 mb-10">
          <main className="flex flex-wrap items-center justify-center gap-6 mb-16">
            <div className="text-center space-y-4 py-6 mb-4 border-4 rounded-xl border-[#4F5DEC] w-full md:w-1/3 lg:w-1/5">
              <div className="flex justify-center">
                <h2 className="bg-[#4F5DEC] text-white rounded-full p-4"><MdOutlineLocationOn/></h2>
              </div>
              <h4><b>Office Address</b></h4>
              <span>Sarit,Westlands Kenya</span>
            </div>
            <div className="text-center space-y-4 p-6 mb-4 border-4 rounded-xl border-[#4F5DEC] w-full md:w-1/3 lg:w-1/5">
              <div className="flex justify-center">
                <h2 className="bg-[#4F5DEC] text-white rounded-full p-4"><FiPhoneCall/></h2>
              </div>
              <h4><b>Call Us</b></h4>
              <span>+254 798 551 1778</span>
            </div>
            <div className="text-center space-y-4 p-6 mb-4 border-4 rounded-xl border-[#4F5DEC] w-full md:w-1/3 lg:w-1/5">
              <div className="flex justify-center">
                <h2 className="bg-[#4F5DEC] text-white rounded-full p-4"><MdOutlineMarkEmailRead/></h2>
              </div>
              <h4><b>Email Us</b></h4>
              <span>info@carway.com</span>
            </div>
            <div className="text-center space-y-4 p-6 mb-4 border-4 rounded-xl border-[#4F5DEC] w-full md:w-1/3 lg:w-1/5">
              <div className="flex justify-center">
                <h2 className="bg-[#4F5DEC] text-white rounded-full p-4"><MdAccessTime/></h2>
              </div>
              <h4><b>Open Time</b></h4>
              <span>Mon - Sat (10.00AM - 05.30PM)</span>
            </div>
          </main>
        </div>
      </section>

      {/* contact form */}
      <section>
        <div className="container mx-auto mb-20">
          <div className="flex flex-wrap items-center justify-center gap-20 p-4 rounded-lg shadow-te-primary shadow-slate-300">
            <div className="p-4">
              <img className="rounded-r-full" width={500} height={500} src="https://live.themewild.com/carway/assets/img/contact/01.jpg" alt="contacts" />
            </div>
            <div className="p-2">
              <div className="space-y-5">
                <h2><b>Get In Touch</b></h2>
                <p>It is a long established fact that a reader will be distracted by the readable <br /> content of a page randomised words which don't look even slightly when <br />looking at its layout.</p>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap ">
                    <div className="p-1 w-full md:w-full lg:w-1/2">
                      <label htmlFor="">
                        <input 
                          type="text" 
                          placeholder="Your Name"
                          required
                          className="block px-2 py-3 mb-4 w-full border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                          value={name}
                          onChange = {(e) => setName(e.target.value)}
                        />
                      </label>
                    </div>
                    <div className="p-1 w-full md:w-full lg:w-1/2">
                      <label htmlFor="">
                        <input 
                          type="email" 
                          placeholder="Your Email"
                          required
                          className="block px-2 py-3 mb-4 w-full border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                          value={email}
                          onChange = {(e) => setEmail(e.target.value)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="p-1">
                    <label htmlFor="">
                      <input 
                        type="text" 
                        placeholder="Your Subject"
                        required
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                        value={subject}
                        onChange = {(e) => setSubject(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="p-1">
                    <label htmlFor="">
                      <textarea name="" id="" 
                        cols="30" rows="5"
                        placeholder="Your Message"
                        required
                        value={message}
                        onChange = {(e) => setMessage(e.target.value)}
                        className="px-2 py-3 block w-full mb-4 mr-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      ></textarea>
                    </label>
                  </div>
                  <div>
                    <button className="bg-[#4F5DEC] text-white px-5 py-2 rounded-lg flex items-center">Send Message &nbsp;&nbsp;<span><MdSend/></span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map */}
      <section>
        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7918394092844!2d36.791479515369225!3d-1.299708099052045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f111f703d7323%3A0xe6c47f88e5410cbc!2sCars%20Guru%20kenya!5e0!3m2!1sen!2ske!4v1679695846899!5m2!1sen!2ske" 
          width={1900} height={450}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map">
        </iframe>
      </section>
    </main>
  )
}

export default Contact

import React from 'react'

const Contact = () => {
  return (
    <main>
        <div className="bg-white">
            <div className="container mx-auto text-center p-4">
                <h1>Contact Us</h1>
                <p>FOOTZY / Contact Us</p>
            </div>
        </div>

        <div className="bg-[#f1ebf5]">
            <div className="container mx-auto py-6">
                <div className="md:w-full relative block p-4">
                    <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8196505005862!2d36.81940731486719!3d-1.2819795490649641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d45af411ad%3A0x6123ae4b4551b201!2sBazaar%20Plaza%2C%20Moi%20Ave%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1661469503361!5m2!1sen!2ske" 
                            title="contact" width="1200" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>   
                </div>
                
                <h1 className="text-center mt-8">Send Us A Message</h1>
                <div className="md:grid grid-cols-2 gap-6 p-4">
                    <div>
                        <form className=" bg-white p-6">
                            <label htmlFor="">Your Name <br />
                                <input 
                                    type="text"
                                    required
                                    className="py-2 px-4 w-full my-2 bg-[#f1ebf5] "
                                />
                            </label>
                            <label htmlFor="">Your Email <br />
                                <input 
                                    type="email" 
                                    className="py-2 px-4 my-2 w-full bg-[#f1ebf5]"
                                    required
                                />
                            </label>
                            <label htmlFor="">Subject <br />
                                <input 
                                    type="text"
                                    required
                                    className="py-2 px-4 my-2 w-full bg-[#f1ebf5]"
                                />
                            </label>
                            <label>Your Message <br />
                                <textarea 
                                    name="" 
                                    cols="30" rows="10"
                                    className="py-2 px-4 my-2 w-full bg-[#f1ebf5]"
                                ></textarea>
                            </label>
                            <button type="Submit" className="py-2 px-4 bg-orange-500 w-full">Send</button>
                        </form>
                    </div>
                    <div>
                        <h3 className="py-4">MEGNOR COMPUTER PVT. LTD.</h3>
                        <p>We Possess Within Us Two Minds. So Far I Have Written Only Of The Conscious Mind.
                            I Would Now Like To Introduce You To Your Second Mind, The Hidden And Mysterious Subconscious.
                        </p>
                        
                        <div className="py-4">
                            <h3>Address:</h3>
                            <p>Moi Avenue</p>
                            <p>Bazzar Tower - 1st Floor</p>
                            <p>Narobi Kenya</p>
                            <br />
                            <h3>Phone Numbers:</h3>
                            <p>(+254) 798-551-78</p>
                            <p>(+254) 123-456-789</p>
                            <br />
                            <h3>Email Address :</h3>
                            <p>info@footzy.com</p>
                            <p>Monday - Friday : 10Am-8pm</p>
                            <p>Saturday : 10Am-6pm</p>
                            <p>Sunday : Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Contact

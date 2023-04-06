import React from 'react'

const ConfirmBooking = () => {
  return (
    <div>
      {/* intro */}
      <section className="mb-20">
        <div className="intro">
          <div className="w-full h-full overflow-hidden bg-fixed">
            <div className="flex items-center h-full">
              <div className="text-white ml-40">
                <h1 className="md:text-6xl font-bold tracking-tight mb-12">Confirm Booking</h1>
                <button className="bg-[#4F5DEC] px-5 py-2 rounded-lg">Home // Confirm Booking</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* order Receipt */}
        <div className="container mx-auto mb-20">
          <div className="flex items-center justify-center text-center">
            <div>
              <h2><b>Your Order Has Been Received</b></h2>
              <span>There are many variations of passages available but the majority have suffered alteration in <br /> some form by injected humour or randomised words.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConfirmBooking

import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <div>
      <section class="mb-40">
        <div class="intro">
          <div class="w-full h-full overflow-hidden bg-fixed">
            <div class="flex items-center h-full">
              <div class="text-white ml-40">
                <h1 class="md:text-6xl font-bold tracking-tight mb-12">About Us </h1>
                <button className="bg-[#4F5DEC] px-5 py-2 rounded-lg">Home // About Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto p-4">
        <section className="md:flex mb-28 gap-20">
          <div className="border-8 p-4 items-center justify-center flex rounded-xl border-[#4F5DEC] w-full h-full">
            <img className="rounded-lg" src="https://live.themewild.com/carway/assets/img/about/01.jpg" alt="" />
          </div>
          <div className="w-full space-y-5">
            <h3 className="text-[#4F5DEC]">ABOUT US</h3>
            <h1><b>We Provide Quality <span className="text-[#4F5DEC]">Car <br /> Rental</span> Services</b></h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className="space-y-4">  
              <p className="flex items-center mr-4"><span className="text-[#4F5DEC]"><IoCheckmarkCircleOutline/></span>At vero eos et accusamus et iusto odio</p>
              <p className="flex items-center mr-4"><span className="text-[#4F5DEC]"><IoCheckmarkCircleOutline/></span>Established fact that a reader will be distracted</p>
              <p className="flex items-center mr-4"><span className="text-[#4F5DEC]"><IoCheckmarkCircleOutline/></span>Sed ut perspiciatis unde omnis iste natus sit</p>
            </div>
            <br />
            <div>
              <button className="flex items-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg">Discover More <h3><IoIosArrowRoundForward/></h3></button>
            </div>
          </div>
        </section>
      </main>

      <section className="bg-[#4F5DEC] text-white py-10 mb-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-evenly">
            <div className="text-center p-4">
              <div className="flex items-center justify-center bg-black border-4 border-white w-32 rounded-full p-5 mb-5">
                <img  className="h-20" src="https://live.themewild.com/carway/assets/img/icon/car.svg" alt="car1" />
              </div>
              <div>
                <h1>500</h1>
                <br />
                <span><b>+ Available Cars</b></span>
              </div>
            </div>
            <div className="text-center p-4">
              <div className="flex items-center justify-center bg-black border-4 border-white w-32 rounded-full p-5 mb-5">
                <img className="h-20" src="https://live.themewild.com/carway/assets/img/icon/car-rent.svg" alt="car1" />
              </div>
              <div>
                <h1>900</h1>
                <br />
                <span><b>+ Happy Clients</b></span>
              </div>
            </div>
            <div className="text-center p-4">
              <div className="flex items-center justify-center bg-black border-4 border-white w-32 rounded-full p-5 mb-5">
                <img className="h-20 " src="https://live.themewild.com/carway/assets/img/icon/driver.svg" alt="car1" />
              </div>
              <div>
                <h1>1500</h1>
                <br />
                <span><b>+ Expert Drivers</b></span>
              </div>
            </div>
            <div className="text-center p-4">
              <div className="flex items-center justify-center bg-black border-4 border-white w-32 rounded-full p-5 mb-5">
                <img  className="h-20" src="https://live.themewild.com/carway/assets/img/icon/experince.svg" alt="car1" />
              </div>
              <div>
                <h1>30</h1>
                <br />
                <span><b>+ Years of Experience</b></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="mb-40 p-20" id="testimonial">
        <div className="text-center mb-20">
          <h4 className="text-[#4F5DEC]"><b>TESTIMONIALS</b></h4>
          <h1><b>What Clients <span className="text-[#4F5DEC]">Say's</span></b></h1>
          <div className="header-divider"></div>
        </div>
        <div class="grid gap-6 text-center md:grid-cols-3">
          <div>
            <div class="block rounded-lg ">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#4F5DEC]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white ">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="" />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                <hr />
                <p class="mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="block rounded-lg ">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#4F5DEC]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white ">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt="" />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                <hr />
                <p class="mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="block rounded-lg ">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#4F5DEC]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white ">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt="" />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                <hr />
                <p class="mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* our team */}
      <section className="container mx-auto mb-20">
        <div className="text-center mb-40">
          <h4 className="text-[#4F5DEC]"><b>TESTIMONIALS</b></h4>
          <h1><b>Meet Our <span className="text-[#4F5DEC]">Team</span></b></h1>
          <div className="header-divider"></div>
        </div>
        <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-4">
          <div className="bg-[#4F5DEC] text-white rounded-xl mb-20">
            <div className="p-4 -mt-20">
              <img className="rounded-xl" src="https://live.themewild.com/carway/assets/img/team/01.jpg" alt="person1" />
            </div>
            <div className="p-4 text-center space-y-2">
              <h3>Chad Smith</h3>
              <h4>Manager</h4>
            </div>
          </div>
          <div className="bg-[#4F5DEC] text-white rounded-xl mb-20">
            <div className="p-4 -mt-20">
              <img className="rounded-xl" src="https://live.themewild.com/carway/assets/img/team/02.jpg" alt="person2" />
            </div>
            <div className="p-4 text-center space-y-2">
              <h3>Gregory Mark</h3>
              <h4>CEO</h4>
            </div>
          </div>
          <div className="bg-[#4F5DEC] text-white rounded-xl mb-20">
            <div className="p-4 -mt-20">
              <img className="rounded-xl" src="https://live.themewild.com/carway/assets/img/team/03.jpg" alt="person1" />
            </div>
            <div className="p-4 text-center space-y-2">
              <h3>Alphine Oduor</h3>
              <h4>Founder</h4>
            </div>
          </div>
          <div className="bg-[#4F5DEC] text-white rounded-xl mb-20">
            <div className="p-4 -mt-20">
              <img className="rounded-xl" src="https://live.themewild.com/carway/assets/img/team/04.jpg" alt="person1" />
            </div>
            <div className="p-4 text-center space-y-2">
              <h3>Joseck Osugo</h3>
              <h4>Managing Director</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

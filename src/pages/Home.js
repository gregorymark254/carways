import React from 'react'
import 'tw-elements';
import { IoCheckmarkCircleOutline,IoPeople } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegHeart,FaRegUserCircle,FaCarAlt,FaGasPump } from "react-icons/fa";
import { MdToday } from "react-icons/md";
import { TbRoad,TbSteeringWheel } from "react-icons/tb";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <section className="relative overflow-hidden ">
        <main id="carouselExampleCaptions" className="relative " data-te-carousel-init data-te-carousel-slide>
          {/* <div className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="0"
              data-te-carousel-active
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="1"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to="2"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-label="Slide 3"></button>
          </div> */}
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] hero">
            <div className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none hero" data-te-carousel-active data-te-carousel-item >
              <img src="https://live.themewild.com/carway/assets/img/slider/slider-1.jpg" className="block w-full" alt="..." />
            </div>
            <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-item>
              <img src="https://live.themewild.com/carway/assets/img/slider/slider-2.jpg" className="block w-full" alt="..." />
            </div>
            <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-item>
              <img src="https://live.themewild.com/carway/assets/img/slider/slider-3.jpg" className="block w-full" alt="..." />
            </div>
            <div className="carousel-caption hidden md:block top-36 absolute text-center text-white">
              {/* <h2 className="bg-[#4F5DEC] px-2 py-4 rounded-xl"><b>50% OFF RESERVED NOW!</b></h2> */}
              <h1 className="text-xl font-bold">Car Rental In Your</h1>
              <h1 className="text-xl font-bold"><span className="text-[#4F5DEC]">Desired</span> Destination</h1>
              <p>There are many variations of passages orem psum available but the majority have suffered <br />
                alteration in some form by injected humour or randomised words which don't look even making
                it look like readable slightly believable.
              </p>
            </div>
          </div>
          <button className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-Width="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  stroke-Linecap="round"
                  stroke-Linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" >Previous</span>
          </button>
          <button className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="next">
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-Width="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  stroke-Linecap="round"
                  stroke-Linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span >
          </button>
        </main>
      </section>


      {/* body */}
      <main className="container mx-auto mt-10">
        {/* car search */}
        <section className="flex items-center justify-center mt-20">
          <div className="shadow-md shadow-slate-500 p-12 rounded-lg w-full">
            <div className="mb-8">
              <h2><b>Let's Find Your Perfect Car</b></h2>
            </div>
            <div>
              <form action="/cars">
                <div className="md:flex">
                  <div className="w-full mr-4">
                    <label htmlFor="">Your Perfect Car
                      <input 
                        type="text" 
                        required
                        placeholder="Type car,model,brand"
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-full mr-4">
                    <label htmlFor="">Pick Up Location
                      <input 
                        type="text" 
                        required
                        placeholder="Type city,airport,station"
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-full ">
                    <label htmlFor="">Drop Off Location
                      <input 
                        type="text" 
                        required
                        placeholder="Type city,airport,station"
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="w-1/2 mr-2">
                    <label htmlFor="">Pick Up Date
                      <input 
                        type="date" 
                        required
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-1/2 mr-4">
                    <label htmlFor="">Pick Up Time
                      <input 
                        type="time" 
                        required
                        placeholder="Type city,airport,station"
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-1/2 mr-4">
                    <label htmlFor="">Drop Up Date
                      <input 
                        type="date" 
                        required
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="w-1/2 mr-2">
                    <label htmlFor="">Drop Up Time
                      <input 
                        type="time" 
                        required
                        placeholder="Type city,airport,station"
                        className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                      />
                    </label>
                  </div>
                  <div className="items-center flex mt-2 w-full">
                    <button className="flex items-center justify-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg w-full">Find Your Car<h3><IoIosArrowRoundForward/></h3></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>


        {/* artcile */}
        <section className="md:grid grid-cols-3 gap-5 my-20">
          <div className="text-center space-y-4 shadow-xl p-4">
            <div className="flex justify-center text-justify items-center">
              <img className="h-20" src="https://live.themewild.com/carway/assets/img/icon/quality-service.svg" alt="icon" />
            </div>
            <h3>Quality Service</h3>
            <p>There are many variations of passages <br /> available but the majority have suffered <br />alteration in some form.</p>
          </div>
          <div className="text-center space-y-4 shadow-xl p-4">
            <div className="flex justify-center text-justify items-center">
              <img className="h-20" src="https://live.themewild.com/carway/assets/img/icon/booking.svg" alt="icon" />
            </div>
            <h3>Online Booking</h3>
            <p>There are many variations of passages <br /> available but the majority have suffered<br /> alteration in some form.</p>
          </div>
          <div className="text-center space-y-4 py-8 shadow-xl p-4">
            <div className="flex justify-center text-justify items-center">
              <img className="h-20" src="https://live.themewild.com/carway/assets/img/icon/money.svg" alt="icon" />
            </div>
            <h3>Affordable Pricing</h3>
            <p>There are many variations of passages <br /> available but the majority have suffered <br /> alteration in some form.</p>
          </div>
        </section>

        {/* about */}
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

        {/* cars */}
        <section>
          <div className="text-center mb-20">
            <h4 className="text-[#4F5DEC]"><b>CARS</b></h4>
            <h1><b>Features <span className="text-[#4F5DEC]">Cars</span></b></h1>
            <div className="header-divider"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div>
              <img className="rounded-xl " src="https://live.themewild.com/carway/assets/img/car/01.jpg" alt="car1" />
              <div>
                <div className="flex justify-between p-3">
                  <h3><b>Toyota Sports Car</b></h3>
                  <span>5.0</span>
                </div>
                <div className="p-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaCarAlt/></span><h5>Model: 2020</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><IoPeople/></span><h5>4 peolpe</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaGasPump/></span><h5>Hybrid</h5></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbRoad/></span><h5>10.15km/1-litre</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbSteeringWheel/></span><h5>Automatic</h5></div>
                  </div>
                </div>
                <hr />
                <div className="flex items-center space-x-3 justify-between p-2">
                  <h4><span className="text-3xl text-[#4F5DEC]">$250</span>/month</h4>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="bg-[#4f5dec3d] text-[#4F5DEC] p-2 rounded-lg"><FaRegHeart/></span>
                    <button className="bg-[#4F5DEC] text-white px-4 py-2 rounded-lg">Rent Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img className="rounded-xl " src="https://live.themewild.com/carway/assets/img/car/02.jpg" alt="car1" />
              <div>
                <div className="flex justify-between p-2">
                  <h3><b>Bmw E46 Car</b></h3>
                  <span>5.0</span>
                </div>
                <div className="p-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaCarAlt/></span><h5>Model: 2020</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><IoPeople/></span><h5>4 peolpe</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaGasPump/></span><h5>Hybrid</h5></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbRoad/></span><h5>10.15km/1-litre</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbSteeringWheel/></span><h5>Automatic</h5></div>
                  </div>
                </div>
                <hr />
                <div className="flex items-center space-x-3 justify-between p-2">
                  <h4><span className="text-3xl text-[#4F5DEC]">$390</span>/month</h4>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="bg-[#4f5dec3d] text-[#4F5DEC] p-2 rounded-lg"><FaRegHeart/></span>
                    <button className="bg-[#4F5DEC] text-white px-4 py-2 rounded-lg">Rent Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img className="rounded-xl " src="https://live.themewild.com/carway/assets/img/car/03.jpg" alt="car1" />
              <div>
                <div className="flex justify-between p-2">
                  <h3><b>Mercedes Benz Car</b></h3>
                  <span>5.0</span>
                </div>
                <div className="p-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaCarAlt/></span><h5>Model: 2020</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><IoPeople/></span><h5>4 peolpe</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaGasPump/></span><h5>Hybrid</h5></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbRoad/></span><h5>10.15km/1-litre</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbSteeringWheel/></span><h5>Automatic</h5></div>
                  </div>
                </div>
                <hr />
                <div className="flex items-center space-x-3 justify-between p-2">
                  <h4><span className="text-3xl text-[#4F5DEC]">$310</span>/month</h4>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="bg-[#4f5dec3d] text-[#4F5DEC] p-2 rounded-lg"><FaRegHeart/></span>
                    <button className="bg-[#4F5DEC] text-white px-4 py-2 rounded-lg">Rent Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img className="rounded-xl " src="https://live.themewild.com/carway/assets/img/car/04.jpg" alt="car1" />
              <div>
                <div className="flex justify-between p-2">
                  <h3><b>Audi R8 Car</b></h3>
                  <span>5.0</span>
                </div>
                <div className="p-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaCarAlt/></span><h5>Model: 2020</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><IoPeople/></span><h5>4 peolpe</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaGasPump/></span><h5>Hybrid</h5></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbRoad/></span><h5>10.15km/1-litre</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbSteeringWheel/></span><h5>Automatic</h5></div>
                  </div>
                </div>
                <hr />
                <div className="flex items-center space-x-3 justify-between p-2">
                  <h4><span className="text-3xl text-[#4F5DEC]">$230</span>/month</h4>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="bg-[#4f5dec3d] text-[#4F5DEC] p-2 rounded-lg"><FaRegHeart/></span>
                    <button className="bg-[#4F5DEC] text-white px-4 py-2 rounded-lg">Rent Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img className="rounded-xl " src="https://live.themewild.com/carway/assets/img/car/05.jpg" alt="car1" />
              <div>
                <div className="flex justify-between p-2">
                  <h3><b>Ferrari 458 Car</b></h3>
                  <span>5.0</span>
                </div>
                <div className="p-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaCarAlt/></span><h5>Model: 2020</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><IoPeople/></span><h5>4 peolpe</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaGasPump/></span><h5>Hybrid</h5></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbRoad/></span><h5>10.15km/1-litre</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbSteeringWheel/></span><h5>Automatic</h5></div>
                  </div>
                </div>
                <hr />
                <div className="flex items-center space-x-3 justify-between p-2">
                  <h4><span className="text-3xl text-[#4F5DEC]">$300</span>/month</h4>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="bg-[#4f5dec3d] text-[#4F5DEC] p-2 rounded-lg"><FaRegHeart/></span>
                    <button className="bg-[#4F5DEC] text-white px-4 py-2 rounded-lg">Rent Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img className="rounded-xl " src="https://live.themewild.com/carway/assets/img/car/06.jpg" alt="car1" />
              <div>
                <div className="flex justify-between p-2">
                  <h3><b>Mercedes Suv Car</b></h3>
                  <span>5.0</span>
                </div>
                <div className="p-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaCarAlt/></span><h5>Model: 2020</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><IoPeople/></span><h5>4 peolpe</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaGasPump/></span><h5>Hybrid</h5></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbRoad/></span><h5>10.15km/1-litre</h5></div>
                    <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbSteeringWheel/></span><h5>Automatic</h5></div>
                  </div>
                </div>
                <hr />
                <div className="flex items-center space-x-3 justify-between p-2">
                  <h4><span className="text-3xl text-[#4F5DEC]">$190</span>/month</h4>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="bg-[#4f5dec3d] text-[#4F5DEC] p-2 rounded-lg"><FaRegHeart/></span>
                    <button className="bg-[#4F5DEC] text-white px-4 py-2 rounded-lg">Rent Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* process */}
        <section>
          <div className="text-center mb-8">
            <h4 className="text-[#4F5DEC]">PROCESS</h4>
            <h1><b>How It <span className="text-[#4F5DEC]">Works</span></b></h1>
            <div className="header-divider"></div>
          </div>
          <div className="md:flex items-center justify-evenly mb-20">
            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                <span>01</span>
                <div className="bg-[#4F5DEC] w-32 border-3 border-[#4F5DEC] p-5 rounded-full mb-5">
                  <img className="h-20" src="https://live.themewild.com/carway/assets/img/icon/destination.svg" alt="work1" />
                </div>
              </div>
              <div className="space-y-3">
                <h3><b>Pick Destination</b></h3>
                <p>It is a long established fact that a reader will be distracted readable content of a page.</p>
              </div>
            </div>
            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                <span>02</span>
                <div className="bg-[#4F5DEC] w-32 border-3 border-[#4F5DEC] p-5 rounded-full mb-5">
                  <img className="h-20" src="https://live.themewild.com/carway/assets/img/icon/choose-car.svg" alt="work1" />
                </div>
              </div>
              <div className="space-y-3">
                <h3><b>Choose Perfect Car</b></h3>
                <p>It is a long established fact that a reader will be distracted readable content of a page.</p>
              </div>
            </div>
            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                <span>03</span>
                <div className="bg-[#4F5DEC] w-32 border-3 border-[#4F5DEC] p-5 rounded-full mb-5">
                  <img className="h-20" src="https://live.themewild.com/carway/assets/img/icon/online-payment.svg" alt="work1" />
                </div>
              </div>
              <div className="space-y-3">
                <h3><b>Choose Perfect Car</b></h3>
                <p>It is a long established fact that a reader will be distracted readable content of a page.</p>
              </div>
            </div>
            <div className="text-center p-4">
              <div className="flex justify-center mb-4">
                <span>04</span>
                <div className="bg-[#4F5DEC] w-32 border-3 border-[#4F5DEC] p-5 rounded-full mb-5">
                  <img className="h-20" src="https://live.themewild.com/carway/assets/img/icon/confirm-ride.svg" alt="work1" />
                </div>
              </div>
              <div className="space-y-3">
                <h3><b>Enjoy Your Car Ride</b></h3>
                <p>It is a long established fact that a reader will be distracted readable content of a page.</p>
              </div>
            </div>
          </div>
        </section>

        {/* our blog */}
        <section className="mb-20">
          <div className="text-center mb-20">
            <h4 className="text-[#4F5DEC]"><b>OUR BLOG</b></h4>
            <h1><b>latest News & <span className="text-[#4F5DEC]">Blog</span></b></h1>
            <div className="header-divider"></div>
          </div>
          <div className="md:grid grid-cols-3 gap-5">
            <div className="p-4">
              <div>
                <img className="rounded-xl" src="https://live.themewild.com/carway/assets/img/blog/01.jpg" alt="blog" />
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaRegUserCircle/></span><h5>By Alicia Davis</h5></div>
                <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><MdToday/></span><h5>March 17,2023</h5></div>
              </div>
              <hr />
              <div className="py-4">
                <h3><b>There are many variations of the passages available suffered</b></h3>
              </div>
              <div>
                <button className="flex items-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg">Read More <h3><IoIosArrowRoundForward/></h3></button>
              </div>
            </div>
            <div className="p-4">
              <div >
                <img className="rounded-xl" src="https://live.themewild.com/carway/assets/img/blog/02.jpg" alt="blog" />
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaRegUserCircle/></span><h5>By Alicia Davis</h5></div>
                <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><MdToday/></span><h5>March 17,2023</h5></div>
              </div>
              <hr />
              <div className="py-4">
                <h3><b>There are many variations of the passages available suffered</b></h3>
              </div>
              <div>
                <button className="flex items-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg">Read More <h3><IoIosArrowRoundForward/></h3></button>
              </div>
            </div>
            <div className="p-4">
              <div>
                <img className="rounded-xl" src="https://live.themewild.com/carway/assets/img/blog/03.jpg" alt="blog" />
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaRegUserCircle/></span><h5>By Alicia Davis</h5></div>
                <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><MdToday/></span><h5>March 17,2023</h5></div>
              </div>
              <hr />
              <div className="py-4">
                <h3><b>There are many variations of the passages available suffered</b></h3>
              </div>
              <div>
                <button className="flex items-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg">Read More <h3><IoIosArrowRoundForward/></h3></button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home

import React,{ useEffect,useState } from 'react'
import 'tw-elements';
import { IoCheckmarkCircleOutline,IoPeople } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegHeart,FaRegUserCircle,FaCarAlt,FaGasPump } from "react-icons/fa";
import { MdToday } from "react-icons/md";
import { TbRoad,TbSteeringWheel } from "react-icons/tb";
import axios from '../api/api'
import Loader from './Loader'


const Home = () => {

  const [cars,setCars] = useState([])
  const [isLoading, setIsLoading] = useState(true);


  //Geting cars from mongodb
  useEffect(() => {
    const fetchCars = async () => {
      const results = await axios.get('/api/v5/all')
      setCars(results.data)
    }
    fetchCars()
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },[])

  return (
    <main>
      {/* hero section */}
      <section className="relative overflow-hidden ">
        <main id="carouselExampleCaptions" className="relative " data-te-carousel-init data-te-carousel-slide>
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']" id="hero">
            <div className="brightness-50 relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none hero" data-te-carousel-active data-te-carousel-item >
              <img src="https://live.themewild.com/carway/assets/img/slider/slider-1.jpg" className="block w-full" alt="..." />
            </div>
            <div className="brightness-50 relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-item>
              <img src="https://live.themewild.com/carway/assets/img/slider/slider-2.jpg" className="block w-full" alt="..." />
            </div>
            <div className="brightness-50 relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-item>
              <img src="https://live.themewild.com/carway/assets/img/slider/slider-3.jpg" className="block w-full" alt="..." />
            </div>
            <div className="carousel-caption md:block top-36 absolute text-center text-white">
              <h1 className="text-xl font-bold">Car Rental In Your</h1>
              <h1 className="text-xl font-bold"><span className="text-[#4F5DEC]">Desired</span> Destination</h1>
              <p>There are many variations of passages orem psum available but the majority have suffered <br />
                alteration in some form by injected humour or randomised words which don't look even making
                it look like readable slightly believable.
              </p>
            </div>
          </div>
          <button className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
            <span className="inline-block h-8 w-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" >Previous</span>
          </button>
          <button className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
            <span className="inline-block h-8 w-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span >
          </button>
        </main>
      </section>

      {/* car search */}
      <section>
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap items-center justify-center">
            <div className="shadow-md shadow-slate-500 p-6 rounded-lg w-full md:full lg:w-3/4">
              <div className="mb-8 p-2">
                <h2><b>Let's Find Your Perfect Car</b></h2>
              </div>
              <div>
                <form action="/cars">
                  <div className="flex flex-wrap ">
                    <div className="p-1 md:w-2/6">
                      <label htmlFor="">Your Perfect Car
                        <input 
                          type="text" 
                          required
                          placeholder="Type car,model,brand"
                          className="block px-2 w-full py-3 mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                        />
                      </label>
                    </div>
                    <div className="p-1 md:w-2/6">
                      <label htmlFor="">Pick Up Location
                        <input
                          type="text" 
                          required
                          placeholder="Type city,airport,station"
                          className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                        />
                      </label>
                    </div>
                    <div className="p-1 md:w-2/6">
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
                  <div className="flex flex-wrap">
                    <div className="p-1 w-full md:w-1/6">
                      <label htmlFor="">Pick Up Date
                        <input 
                          type="date" 
                          required
                          className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                        />
                      </label>
                    </div>
                    <div className="p-1 w-full md:w-1/6">
                      <label htmlFor="">Pick Up Time
                        <input 
                          type="time" 
                          required
                          className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                        />
                      </label>
                    </div>
                    <div className="p-1 w-full md:w-1/6">
                      <label htmlFor="">Drop Up Date
                        <input 
                          type="date" 
                          required
                          className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                        />
                      </label>
                    </div>
                    <div className="p-1 w-full md:w-1/6">
                      <label htmlFor="">Drop Up Time
                        <input 
                          type="time" 
                          required
                          className="block px-2 py-3 w-full mb-4 border border-slate-300 rounded-lg focus:outline-none focus:border-[#4F5DEC]"
                        />
                      </label>
                    </div>
                    <div className="items-center flex p-1 w-full md:w-1/3">
                      <button className="flex items-center justify-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg w-full">Find Your Car<h3><IoIosArrowRoundForward/></h3></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


        {/* artcile */}
        <section>
          <div className="container mx-auto p-4">
            <div className="flex flex-wrap xl:flex-wrap items-center xl:justify-center gap-10 my-20">
              <div className="text-center space-y-4 shadow-xl p-8 rounded-lg">
                <div className="flex justify-center text-justify items-center">
                  <img className="h-20" src="https://live.themewild.com/carway/assets/img/icon/quality-service.svg" alt="icon" />
                </div>
                <h3>Quality Service</h3>
                <p>There are many variations of passages <br /> available but the majority have suffered <br />alteration in some form.</p>
              </div>
              <div className="text-center space-y-4 shadow-xl p-8 rounded-lg">
                <div className="flex justify-center text-justify items-center">
                  <img className="h-20" src="https://live.themewild.com/carway/assets/img/icon/booking.svg" alt="icon" />
                </div>
                <h3>Online Booking</h3>
                <p>There are many variations of passages <br /> available but the majority have suffered<br /> alteration in some form.</p>
              </div>
              <div className="text-center space-y-4 shadow-xl p-8 rounded-lg">
                <div className="flex justify-center text-justify items-center">
                  <img className="h-20" src="https://live.themewild.com/carway/assets/img/icon/money.svg" alt="icon" />
                </div>
                <h3>Affordable Pricing</h3>
                <p>There are many variations of passages <br /> available but the majority have suffered <br /> alteration in some form.</p>
              </div>
            </div>
          </div>
        </section>

        {/* about */}
        <section>
          <div className="container mx-auto p-4">
            <div className="flex flex-wrap items-center justify-center my-20 gap-20">
              <div>
                <div className="border-8 p-4 justify-center rounded-xl border-[#4F5DEC]">
                  <img className="rounded-lg" width={400} height={400} src="https://live.themewild.com/carway/assets/img/about/01.jpg" alt="" />
                </div>
              </div>
              <div className="space-y-5 p-2">
                <h3 className="text-[#4F5DEC]">ABOUT US</h3>
                <h1><b>We Provide Quality <span className="text-[#4F5DEC]">Car <br /> Rental</span> Services</b></h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable.</p>
                <div className="space-y-4">  
                  <div className="flex items-center space-x-3">
                    <p className="text-[#4F5DEC] font-bold"><IoCheckmarkCircleOutline/></p>
                    <p>At vero eos et accusamus et iusto odi</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <h5 className="text-[#4F5DEC] font-bold"><IoCheckmarkCircleOutline/></h5>
                    <p>Established fact that a reader will be distracted</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <h5 className="text-[#4F5DEC] font-bold"><IoCheckmarkCircleOutline/></h5>
                    <p>Sed ut perspiciatis unde omnis iste natus sit</p>
                  </div>
                </div>
                <br />
                <div>
                  <button onClick={(e) => window.location.assign("/cars")} className="flex items-center space-x-2 bg-[#4F5DEC] hover:bg-blue-500 text-white px-5 py-3 rounded-lg">Discover More <h3><IoIosArrowRoundForward/></h3></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* cars */}
        <section>
          <div className="container mx-auto p-4">
            <div className="text-center">
              <h4 className="text-[#4F5DEC]"><b>CARS</b></h4>
              <h1><b>Featured <span className="text-[#4F5DEC]">Cars</span></b></h1>
              <div className="header-divider"></div>
            </div>
            {isLoading ? (
              <div>
                <Loader/>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2 lg:grid-cols-3">
                {
                  cars.map((cars) => (
                    <div key={cars._id}>
                      <img className="rounded-xl" width={500} height={235}  src={cars.src} alt="car1" />
                      <div>
                        <div className="flex justify-between p-3">
                          <h3><b>{cars.title}</b></h3>
                          <span>5.0</span>
                        </div>
                        <div className="p-2">
                          <div className="flex flex-wrap items-center justify-between mb-4">
                            <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaCarAlt/></span><h5>Model: 2020</h5></div>
                            <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><IoPeople/></span><h5>4 peolpe</h5></div>
                            <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><FaGasPump/></span><h5>Hybrid</h5></div>
                          </div>
                          <div className="flex flex-wrap items-center justify-between">
                            <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbRoad/></span><h5>10.15km/1-litre</h5></div>
                            <div className="flex items-center space-x-2"><span className="text-[#4F5DEC]"><TbSteeringWheel/></span><h5>Automatic</h5></div>
                          </div>
                        </div>
                        <hr />
                        <div className="flex flex-wrap items-center space-x-3 justify-between py-2">
                          <h4><span className="text-xl text-[#4F5DEC]">{cars.amount}</span>/day</h4>
                          <div className="flex items-center space-x-3 mt-2">
                            <span className="bg-[#4f5dec3d] text-[#4F5DEC] p-2 rounded-lg"><FaRegHeart/></span>
                            <button className="bg-[#4F5DEC] text-white px-4 py-2 rounded-lg">Rent Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            )}
          </div>
        </section>

        {/* process */}
        <section>
          <div className="container mx-auto p-4 my-20">
            <div className="text-center mb-8">
              <h4 className="text-[#4F5DEC]">PROCESS</h4>
              <h1><b>How It <span className="text-[#4F5DEC]">Works</span></b></h1>
              <div className="header-divider"></div>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <span>01</span>
                  <div className="bg-[#4F5DEC] w-32 border-3 border-[#4F5DEC] p-5 rounded-full mb-5">
                    <img className="h-20" src="https://live.themewild.com/carway/assets/img/icon/destination.svg" alt="work1" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3><b>Pick Destination</b></h3>
                  <p>It is a long established fact that a reader will be <br /> distracted readable content of a page.</p>
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
                  <p>It is a long established fact that a reader will be <br />distracted readable content of a page.</p>
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
                  <p>It is a long established fact that a reader will be <br />distracted readable content of a page.</p>
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
                  <p>It is a long established fact that a reader will be <br />distracted readable content of a page.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* our blog */}
        <section className="mb-20">
          <div className="container mx-auto p-4">
            <div className="text-center mb-8">
              <h4 className="text-[#4F5DEC]"><b>OUR BLOG</b></h4>
              <h1><b>latest News & <span className="text-[#4F5DEC]">Blog</span></b></h1>
              <div className="header-divider"></div>
            </div>
            
            <div className="flex flex-wrap items-center justify-start gap-10 mb-20 lg:justify-center">
              <div className='py-4'>
                <div>
                  <img width={300} className="rounded-xl" src="https://live.themewild.com/carway/assets/img/blog/01.jpg" alt="blog" />
                </div>
                <div className="flex flex-wrap items-center space-x-5 py-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#4F5DEC]"><FaRegUserCircle/></span>
                    <h5>By Alicia Davis</h5>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#4F5DEC]"><MdToday/></span>
                    <h5>March 17,2023</h5>
                  </div>
                </div>
                <hr />
                <div className="py-4">
                  <h3><b>There are many variations of <br /> the passages available </b></h3>
                </div>
                <div>
                  <button className="flex items-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg">Read More <h3><IoIosArrowRoundForward/></h3></button>
                </div>
              </div>
              <div className='py-4'>
                <div>
                  <img width={300} className="rounded-xl" src="https://live.themewild.com/carway/assets/img/blog/02.jpg" alt="blog" />
                </div>
                <div className="flex flex-wrap items-center space-x-5 py-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#4F5DEC]"><FaRegUserCircle/></span>
                    <h5>By Alicia Davis</h5>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#4F5DEC]"><MdToday/>
                    </span><h5>March 17,2023</h5>
                  </div>
                </div>
                <hr />
                <div className="py-4">
                  <h3><b>There are many variations of <br /> the passages available </b></h3>
                </div>
                <div>
                  <button className="flex items-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg">Read More <h3><IoIosArrowRoundForward/></h3></button>
                </div>
              </div>
              <div className='py-4'>
                <div>
                  <img width={300} className="rounded-xl" src="https://live.themewild.com/carway/assets/img/blog/03.jpg" alt="blog" />
                </div>
                <div className="flex flex-wrap items-center space-x-5 py-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#4F5DEC]"><FaRegUserCircle/></span>
                    <h5>By Alicia Davis</h5>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#4F5DEC]"><MdToday/>
                    </span><h5>March 17,2023</h5>
                  </div>
                </div>
                <hr />
                <div className="py-4">
                  <h3><b>There are many variations of <br /> the passages available </b></h3>
                </div>
                <div>
                  <button className="flex items-center space-x-2 bg-[#4F5DEC] text-white px-5 py-3 rounded-lg">Read More <h3><IoIosArrowRoundForward/></h3></button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Home

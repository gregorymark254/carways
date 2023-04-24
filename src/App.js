import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Missing from "./pages/Missing"
import Unathorised from "./pages/Unathorised"

import Login from "./Account/Login"
import Register from "./Account/Register"
import Profile from "./Account/Profile"
import Admin from "./Account/Admin"
import Booking from "./Booking/Booking"
import CheckOut from "./Booking/Checkout"
import ConfirmBooking from "./Booking/ConfirmBooking"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <main>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/unauthorised" element={<Unathorised/>} />

        <Route path="/booking" element={<Booking/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/confirmBooking" element={<ConfirmBooking/>} />

        <Route path="/" element={<Home/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="*" element={<Missing/>} />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;

import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

import Login from "./Account/Login"
import Register from "./Account/Register"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <main>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route path="/" element={<Home/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;

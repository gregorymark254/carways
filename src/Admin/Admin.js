import React, {  useEffect } from 'react'
import { useNavigate,useLocation,Link } from "react-router-dom";
import { BookingState } from '../Context/BookingContext'

const Admin = () => {

  const { state : { userInfo } } = BookingState()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/login'
  const navigate = useNavigate()

  //check if the user is loged in and verify is Admin
  useEffect(() => {
    if(!userInfo){
      navigate(redirect)
    }
  },[navigate, redirect, userInfo])

  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem("userInfo"));
    if (storedItem && storedItem.isAdmin !== true) {
      navigate("/unauthorised");
    }
  }, [navigate]);

  return (
    <div>
      <div className="container mx-auto min-h-screen">
        <h1>Admin</h1>
        <ul>
          <li><Link to="/bookingData">Booking</Link></li>
          <li><Link to="/billingData">Billing</Link></li>
          <li><Link to="/usersData">Users</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Admin

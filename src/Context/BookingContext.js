import React, { createContext,useReducer,useContext } from 'react'


const Booking = createContext()

const BookingContext = ({children}) => {

  const initialState = {
    booking :  [],
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    roles : []
  }

  const bookingReducer = (state,action) => {
    switch (action.type) {
      case "ADD_TO_BOOKING":
        const newBookingItem = { ...action.payload, qty: 1 };
        const newBooking = [...state.booking, newBookingItem];
        localStorage.setItem("booking", JSON.stringify(newBooking));
        return { ...state, booking: newBooking };
      case "LOAD_BOOKING_FROM_STORAGE":
        const storedBooking = JSON.parse(localStorage.getItem("booking")) || [];
        return { ...state, booking: storedBooking };
      case "REMOVE_FROM_BOOKING":
        const updatedBooking = state.booking.filter(
          (product) => product.id !== action.payload.id
        );
        localStorage.setItem("booking", JSON.stringify(updatedBooking));
        return { ...state, booking: updatedBooking };
      case "EMPTY_BASKET": {
        state.booking = state.booking.forEach((product) => (product.count = 1));
        state.booking = [];
        return {...state}}
      case "USER_SIGNIN" :
        return {...state, userInfo:action.payload}   
      case "USER_SIGNOUT":
        return {...state, userInfo:null}
      case "SHIPPING":
        return {...state, booking :{...state.booking, shippingAddress: action.payload}}
      default:
        return state;
    }
  }

  const [state,dispatch] = useReducer(bookingReducer, initialState)

  return (
    <div>
      <Booking.Provider value={{state,dispatch}}>
        {children}
      </Booking.Provider>
    </div>
  )
}

export default BookingContext

export const BookingState = () => {
  return useContext(Booking)
} 
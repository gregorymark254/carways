import React, { createContext,useReducer,useContext } from 'react'


const Booking = createContext()

const BookingContext = ({children}) => {

  const initialState = {
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  }

  const bookingReducer = (state,action) => {
    switch (action.type) {
      case "USER_SIGNIN" :
        return {...state, userInfo:action.payload}   
      case "USER_SIGNOUT":
        return {...state, userInfo:null}
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
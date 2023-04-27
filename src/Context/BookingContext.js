import React, { createContext,useReducer,useContext } from 'react'


const Booking = createContext()

const BookingContext = ({children}) => {

  const initialState = {
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    cart : {cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []},
    bookingInfo : localStorage.getItem('bookingInfo') ? JSON.parse(localStorage.getItem('bookingInfo')) : null
  }

  const bookingReducer = (state,action) => {
    switch (action.type) {
      case "USER_SIGNIN" :
        return {...state, userInfo:action.payload}   
      case "USER_SIGNOUT":
        return {...state, userInfo:null}
      case 'CART_ADD_ITEM':
        // add to cart
        const newItem = action.payload;
        const existItem = state.cart.cartItems.find((item) => item._id === newItem._id);
        const cartItems = existItem ? state.cart.cartItems.map((item) => item._id === existItem._id ? newItem : item)
        : [...state.cart.cartItems, newItem];
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return { ...state, cart: { ...state.cart, cartItems } };
      case 'CART_REMOVE_ITEM': {
        const cartItems = state.cart.cartItems.filter((item) => item._id !== action.payload._id);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return { ...state, cart: { ...state.cart, cartItems } };
      }
      case "BOOKING" :
        return {...state, bookingInfo:action.payload} 
      case "CHECKOUT":
        localStorage.removeItem('bookingInfo')
        return {...state, bookingInfo:null}
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
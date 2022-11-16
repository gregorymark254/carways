import React, { createContext,useReducer,useContext } from 'react'
import allAdidas from '../ShoeData/Adidas'
import allBalenciaga from '../ShoeData/Balenciaga'
import allCrocs from '../ShoeData/Crocs'
import allNewbalace from '../ShoeData/Newbalance'
import allNike from '../ShoeData/Nike'
import allPuma from '../ShoeData/Puma'
import allReebok from '../ShoeData/Reebok'
import allSkechers from '../ShoeData/Skechers'
import allVans from '../ShoeData/Vans'


const Cart = createContext()

const Context = ({children}) => {
  const product = {
    allAdidas,
    allBalenciaga,
    allCrocs,
    allNewbalace,
    allNike,
    allPuma,
    allReebok,
    allSkechers,
    allVans
  }

  const initialState = {
    product,
    cart :  [],
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  }

  const cartReducer = (state,action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {...state,cart : [...state.cart, {...action.payload, qty:1}]}
      case "REMOVE_FROM_CART":
        return {...state, cart:state.cart.filter(product => product.id !== action.payload.id)}
      case "EMPTY_BASKET": {
        state.cart = state.cart.forEach((product) => (product.count = 1));
        state.cart = [];
        return {...state}}
      case "USER_SIGNIN" :
        return {...state, userInfo:action.payload}   
      case "USER_SIGNOUT":
        return {...state, userInfo:null}
      case "SHIPPING":
        return {...state, cart :{...state.cart, shippingAddress: action.payload}}
      default:
        return state;
    }
  }

  const [state,dispatch] = useReducer(cartReducer, initialState)

  
  return (
    <>
      <Cart.Provider value={{state,dispatch}}>
        {children}
      </Cart.Provider>
    </>
  )
}

export default Context

export const CartState = () => {
  return useContext(Cart)
} 
import React,{ useState } from 'react'
import { CartState } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom'

const Shipping = () => {

    const {  dispatch } = CartState()
    // const { cart:{shippingAddress}} = state
    const navigate = useNavigate()

    const [name,setName] = useState( '')
    const [address,setAddress] = useState('')
    const [number,setNumber] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:'SHIPPING', payload: {name,address,number}})
        localStorage.setItem('shippingAddress', JSON.stringify({name,address,number}))
        navigate('/pay')
    }

  return (
    <main>
      <div className="container mx-auto p-4">
        <div className="min-h-screen ">
            <form className="md:block" onSubmit={handleSubmit} >
                <label htmlFor="">Full Names
                    <input 
                        type="text"
                        required
                        placeholder="Full Names"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className=""
                    />
                </label>
                <label htmlFor="address">Address
                    <input 
                        type="text"
                        required
                        placeholder="Address"
                        value={address}
                        onChange={(e) =>setAddress(e.target.value)}
                        className=""
                    />
                </label>
                <label htmlFor="Number">Phone Number
                    <input 
                        type="text"
                        required
                        placeholder="Phone Number"
                        value={number}
                        onChange={(e) =>setNumber(e.target.value)}
                        className=""
                    />
                </label>
                <button>Continue</button>
            </form>
        </div>
      </div>
    </main>
  )
}

export default Shipping

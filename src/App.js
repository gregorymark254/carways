import Header from './pages/Header'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Faqs from './pages/Faqs'
import Media from './pages/Media'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

import Login from './components/Account/Login'
import Register from './components/Account/Register'
import Basket from './components/Cart/Basket'
import AdidasDetails from './components/Details/AdidasDetails'
import BalenciagaDetails from './components/Details/BalenciagaDetails'
import NikeDetails from './components/Details/NikeDetails'
import NewbalanceDetails from './components/Details/NewbalaceDetails'
import PumaDetails from './components/Details/PumaDetails'
import ReebokDetails from './components/Details/ReebokDetails'
import SkechersDetails from './components/Details/SkechersDetails'
import VansDetails from './components/Details/VansDetails'
import Products from './components/Products/ProductCategory/Category'

import Adidasprod from './components/Products/Adidasprod'
import Balenciaga from './components/Products/BalenciagaProd'
import Boots from './components/Products/BootsProd'
import Converse from './components/Products/ConverseProd'
import Crocs from './components/Products/CrocsProd'
import Jordans from './components/Products/JordansProd'
import NewBalance from './components/Products/NewBalanceProd'
import Nike from './components/Products/NikeProd'
import Puma from './components/Products/PumaProd'
import Reebok from './components/Products/ReebokProd'
import Skechers from './components/Products/SkechersProd'
import Vans from './components/Products/VansProd'
import Shipping from './components/Checkout/Shipping'
import Pay from "./components/Checkout/Pay"

import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
     <Header/>
     <Navbar/>
      <div className="min-h-screen">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/faqs" element={<Faqs/>} />
          <Route exact path="/media" element={<Media/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/cart" element={<Basket/>} /> 
          <Route exact path="/shipping" element={<Shipping/>} /> 
          <Route exact path="/pay" element={<Pay/>} /> 

          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/adidas/details/:id" element={<AdidasDetails/>}  />
          <Route exact path="/balenciaga/details/:id" element={<BalenciagaDetails/>}  />
          <Route exact path="/nike/details/:id" element={<NikeDetails/>}  />
          <Route exact path="/newbalance/details/:id" element={<NewbalanceDetails/>}  />
          <Route exact path="/puma/details/:id" element={<PumaDetails/>}  />
          <Route exact path="/reebok/details/:id" element={<ReebokDetails/>}  />
          <Route exact path="/skechers/details/:id" element={<SkechersDetails/>}  />
          <Route exact path="/vans/details/:id" element={<VansDetails/>}  />
          <Route exact path="/product-category" element={<Products/>}  />

          <Route exact path="/adidas" element={<Adidasprod/>}  />
          <Route exact path="/balenciaga"element={<Balenciaga/>}  />
          <Route exact path="/boots" element={<Boots/>}  />
          <Route exact path="/converse" element={<Converse/>}  />
          <Route exact path="/crocs-slides" element={<Crocs/>}  />
          <Route exact path="/jordans" element={<Jordans/>}  />
          <Route exact path="/new-balance" element={<NewBalance/>}  />
          <Route exact path="/nike" element={<Nike/>}  />
          <Route exact path="/puma" element={<Puma/>}  />
          <Route exact path="/reebok" celement={<Reebok/>}  />
          <Route exact path="/skechers" element={<Skechers/>}  />
          <Route exact path="/vans" element={<Vans/>}  />
        </Routes>
      </div>
     <Footer/>

    </div>
  );
}

export default App;

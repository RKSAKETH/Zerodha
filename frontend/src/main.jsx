import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes , Route} from "react-router-dom";
import './index.css'
import HomePage from './landingPage/Home/HomePage'
import SignupPage from './landingPage/Signup/SignupPage'
import Aboutpage from './landingPage/About/Aboutpage'
import Pricingpage from './landingPage/Pricing/PricingPage'
import Productpage from './landingPage/Products/Productpage'
import Supportpage from './landingPage/Support/Supportpage';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import MarginLayout from './layouts/MarginLayout';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/pricing" element= {<MarginLayout>  <Pricingpage /> </MarginLayout>} />
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path='/product' element={<Productpage/>} />
      <Route path="/support" element={<Supportpage/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
)

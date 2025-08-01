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
import ZeroMarginLayout from './layouts/ZeroMarginLayout';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MarginLayout><Navbar/></MarginLayout>
    <Routes>
      <Route path="/" element={<MarginLayout><HomePage/> </MarginLayout> }/>
      <Route path="/signup" element={<MarginLayout> <SignupPage/> </MarginLayout> }/>
      <Route path="/pricing" element= {<ZeroMarginLayout>  <Pricingpage /> </ZeroMarginLayout>} />
      <Route path="/about" element={<MarginLayout><Aboutpage/> </MarginLayout> }/>
      <Route path='/product' element={<MarginLayout> <Productpage/> </MarginLayout> }/>
      <Route path="/support"element={<MarginLayout> <Supportpage/> </MarginLayout> }/>
    </Routes>
    <MarginLayout><Footer/></MarginLayout>
  </BrowserRouter>
)

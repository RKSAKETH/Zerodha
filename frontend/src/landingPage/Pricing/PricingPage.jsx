import Hero from "./Hero"
import Prices from "./Prices"
import PricingTable from "./PricingTable"
export default function Pricingpage() {
    return (
        <div className="pricingPage">
            <Hero/>
            <Prices/>
            <PricingTable/>
        </div>
    )
}
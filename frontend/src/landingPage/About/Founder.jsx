export default function Founder(){
    return (
        <div>
            <h1 className="text-2xl text-center text-gray-700 font-medium mb-20">People</h1>
        <div className="grid grid-cols-[1fr_2fr] gap-x-30">
            <div>
                <img src="images/nithinKamath.jpg" className="rounded-full h-auto w-2xs mb-3"></img>
                <h4 className="text-lg text-gray-800 mb-4 text-center">Nithin Kamath</h4>
                <h6 className="text-sm text-gray-500 text-center">Founder, CEO</h6>
            </div>
            <div>
                <p className="text-base/7 text-gray-700 mb-5">Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. 
                   Today, Zerodha has changed the landscape of the Indian broking industry.
                </p>
                <p className="text-base/7 text-gray-700 mb-5">
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                </p>
                <p className="text-base/7 text-gray-700 mb-5">
                    Playing basketball is his zen.
                </p>
                <p className="text-base/7 text-gray-700 mb-5">Connect on
                    <a href="#" className="text-[rgb(37,150,190)] cursor-pointer" > Homepage/</a>
                    <a href="#" className="text-[rgb(37,150,190)] cursor-pointer" >TradingQnA/</a>
                    <a href="#" className="text-[rgb(37,150,190)] cursor-pointer" >Twitter</a>
                </p>
            </div>
        </div>
        </div>
        
    )
}
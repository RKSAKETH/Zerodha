export default function Prices(){
    return (
        <div className="grid grid-cols-3 gap-x-10">
            <div className="text-center leading-7">
                <img src="images/pricingEquity.svg" className="w-3xs h-auto mx-auto"></img>
                <h1 className="text-2xl mb-5 font-medium">Free equity delivery</h1>
                <p className="text-gray-500">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="text-center leading-7">
                <img src="images/intradayTrades.svg" className="w-3xs h-auto mx-auto"></img>
                <h1 className="text-2xl mb-5">Intraday and F&O trades</h1>
                <p className="text-gray-500">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. 
                   Flat ₹20 on all option trades.
                </p>
            </div>
            <div className="text-center leading-7">
                <img src="images/pricingEquity.svg" className="w-3xs h-auto mx-auto"></img>
                <h1  className="text-2xl mb-5">Free direct MF</h1>
                <p className="text-gray-500">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    )
   
}
export default function Universe() {
    return (
        <div className="text-center">
            <h4 className="text-2xl mb-5 text-gray-700 font-medium">The Zerodha Universe</h4>
            <p className="text-gray-700 mb-10">Extend your trading and investment experience even further with our partner platforms</p>
            <div className="grid grid-cols-3 gap-x-10">

                <div>

                    <div className="mb-10">
                        <img src="images/zerodhaFundhouse.png" alt="zerodhaFundhouse" href="#" className="cursor-pointer w-50 h-auto mx-auto mb-1"></img>
                        <p className="text-sm text-gray-500">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p> 
                    </div>

                    <div>
                        <img src="images/streakLogo.png" alt="zerodhaFundhouse" href="#" className="cursor-pointer w-50 h-auto mx-auto mb-1"></img>
                        <p className="text-sm text-gray-500">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </div>
                </div>

                <div>
                    <div className="mb-10">
                        <img src="images/sensibullLogo.svg" alt="sensibullLogo" href="#" className="cursor-pointer w-50 h-auto mx-auto mb-6"></img>
                        <p className="text-sm text-gray-500">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </div>

                    <div>
                        <img src="images/smallcaseLogo.png" alt="smallcaseLogo" href="#" className="cursor-pointer w-50 h-auto mx-auto mb-1"></img>
                        <p className="text-sm text-gray-500">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </div>
                </div>

                <div>
                    <div className="mb-10">
                        <img src="images/goldenpiLogo.png" alt="" href="#" className="cursor-pointer w-50 h-auto mx-auto mb-1"></img>
                        <p className="text-sm text-gray-500">That offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    </div>

                    <div>
                        <img src="images/dittoLogo.png" alt="" href="#" className="cursor-pointer w-50 h-auto mx-auto mb-1"></img>
                        <p className="text-sm text-gray-500">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}
export default function Stats(){
    return (
        <>
            <div className="grid grid-cols-2 gap-x-15 mb-25 items-center">
                    <img src="images/kite.png" className="opacity-100 hover:opacity-70"></img>
                    <div>
                        <h3 className="text-2xl">Kite</h3>
                        <p className="text-gray-700 leading-7">Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more.
                            Enjoy the Kite experience seamlessly on your Android and iOS devices.
                        </p>
                        <div className="mt-5">
                            <a href="#" className="text-[rgb(70,136,228)] mr-10" >Try demo <i className="fa-solid fa-arrow-right"></i></a>
                            <a href="#" className="text-[rgb(70,136,228)] mb-4">Learn More <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="mt-5">
                            <button className="cursor-pointer mr-2"><img src="images/appstoreBadge.svg"></img></button>
                            <button className="cursor-pointer"><img src="images/googlePlayBadge.svg"></img></button>
                        </div>
                    </div>
                        
            </div>


            <div className="grid grid-cols-2 gap-x-15 mb-25 items-center">
                <div>
                    <h3 className="text-2xl">Console</h3>
                    <p className="text-gray-700 leading-7">The central dashboard for your Zerodha account. 
                        Gain insights into your trades and investments with in-depth reports and visualisations.
                    </p>
                    <div className="mt-5">
                        <a href="#" className="text-[rgb(70,136,228)]">Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <img src="images/console.png" className="opacity-100 hover:opacity-70"></img>
            </div>


            <div className="grid grid-cols-2 gap-x-15 mb-25 items-center">
                    <img src="images/coin.png" className="opacity-100 hover:opacity-70"></img>
                    <div className="">
                        <h3 className="text-2xl">Coin</h3>
                        <p className="text-gray-700 leading-7">Buy direct mutual funds online, commission-free, delivered directly to your Demat account.
                            Enjoy the investment experience on your Android and iOS devices.
                        </p>
                        <div>
                             <a href="#" className="text-[rgb(70,136,228)] mr-10" >Coin <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className="mt-5">
                            <button className="cursor-pointer mr-2"><img src="images/appstoreBadge.svg"></img></button>
                            <button className="cursor-pointer"><img src="images/googlePlayBadge.svg"></img></button>
                        </div>
                    </div>
            </div>

            <div className="grid grid-cols-2 gap-x-15 mb-25 items-center">
                <div>
                    <h3 className="text-2xl">Kite Connect API</h3>
                    <p className="text-gray-700 leading-7">Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. 
                        If you are a startup, build your investment app and showcase it to our clientbase.
                    </p>
                    <div className="mt-5">
                        <a href="#" className="text-[rgb(70,136,228)]">Kite Connect <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <img src="images/kiteconnect.png" className="opacity-100 hover:opacity-70"></img>
            </div>

            <div className="grid grid-cols-2 gap-x-15 mb-25 items-center">
                    <img src="images/varsity.png" className="opacity-100 hover:opacity-70"></img>
                    <div className="">
                        <h3 className="text-2xl">Varsity mobile</h3>
                        <p className="text-gray-700 leading-7">An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. 
                            Content is broken down into bite-size cards to help you learn on the go.
                        </p>
                        <div className="mt-5">
                            <button className="cursor-pointer mr-2"><img src="images/appstoreBadge.svg"></img></button>
                            <button className="cursor-pointer"><img src="images/googlePlayBadge.svg"></img></button>
                        </div>
                    </div>
            </div>

            
        </>
              
    )
}

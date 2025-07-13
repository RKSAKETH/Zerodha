export default function () {
    return (
        <div className="grid grid-cols-2 mb-15">
            <img src="images/education.svg" alt="education"></img>
            <div className="ml-10 mt-13">
                <h1 className="text-2xl mb-5 ">Free and open market education</h1>

                <div className="mb-5">
                    <p className="mb-2 text-sm">
                        Varsity, the largest online stock market education
                        book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a className="!text-[rgb(37,150,190)] cursor-pointer">Varsity&nbsp;&nbsp;<i className="fa-solid fa-arrow-right" style={{ color: '#74C0FC' }}></i></a>
                </div>
                
                <div className="mb-5">
                    <p className="mb-2 text-sm">
                        TradingQ&A, the most active trading and investment community in India for all 
                        your market-related queries.
                    </p>
                    <a className="!text-[rgb(37,150,190)] cursor-pointer">TradingQ&A&nbsp;&nbsp;<i className="fa-solid fa-arrow-right" style={{ color: '#74C0FC' }}></i></a>
                </div>

            </div>
        </div>
    )
}
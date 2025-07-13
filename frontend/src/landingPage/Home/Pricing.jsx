export default function Pricing () {
    return (
        <div className="grid grid-cols-2 mb-15">
            <div>
                <h1 className="text-2xl mb-3">Unbeatable Pricing</h1>
                <p className="mb-3">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a className="!text-[rgb(37,150,190)] cursor-pointer">See pricing&nbsp;&nbsp;<i className="fa-solid fa-arrow-right" style={{ color: '#74C0FC' }}></i></a>
            </div>
            <div className="flex flex-row w-30">
                <img src="images/pricing0.svg" alt="pricing0"></img>
                <p className="text-sm">free account opening</p>
                <img src="images/pricing0.svg" alt="pricing0"></img>
                <img src="images/intradayTrades.svg" alt="intradayTrades"></img>
            </div>
        </div>
    )
}

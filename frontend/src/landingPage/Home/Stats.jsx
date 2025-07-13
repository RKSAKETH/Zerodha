export default function Stats () {
    return (
        <div className="grid grid-cols-2 mb-15">
            <div>
                <h1 className="text-2xl mb-6 text-black">Trust with confidence</h1>
                
                <h3 className="text-xl mb-2 text-black">Customer-first always</h3>
                <p className="mb-4">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 
                    15% of daily retail exchange volumes in India.
                </p>

                <h3 className="text-xl mb-2 text-black">No spam or gimmicks</h3>
                <p className="mb-4">No gimmicks, spam, "gamification", or annoying push notifications.
                    High quality apps that you use at your pace, the way you like. Our <a className="cursor-pointer !text-[rgb(37,150,190)]">philosophies.</a>
                </p>

                <h3 className="text-xl mb-2 text-black">The Zerodha universe</h3>
                <p className="mb-4">Not just an app, but a whole ecosystem. 
                   Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                </p>

                <h3 className="text-xl mb-2 text-black">Do better with money</h3>
                <p className="mb-4">With initiatives like <a className="cursor-pointer !text-[rgb(37,150,190)]">Nudge</a> and <a className="cursor-pointer !text-[rgb(37,150,190)]">Kill Switch</a>, we don't just facilitate transactions, 
                   but actively help you do better with your money.
                </p>
            </div>
            <img src="images/ecosystem.png" alt="ecosystem" className="ml-5 mt-15"></img>
        </div>
    )
}
import './Home.css'

export default function () {
    return (
        <div className="flex-col text-center mb-15">
            <img src="images/homeHero.png" className="mb-5 mt-5 h-100"></img>
            <h1 className="text-3xl font-bold mb-2">Invest in everything</h1>
            <p className="mb-4">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className="bg-[rgb(37,150,190)] hover:bg-black text-white p-0.75 pl-4 pr-4 rounded-xs mb-10">Sign up for free</button>
        </div>
    );
}

export default function Hero() {
    return (
        <div className="bg-gray-100 min-h-[12rem] px-5">
            <div className="flex justify-between">
                <h1 className="text-3xl text-gray-700 font-bold">Support Portal</h1>
                <button className="bg-[rgba(57,125,208,255)] text-white rounded-sm px-2">My Tickets</button>
            </div>

            <div className="relative mt-5">
                <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                    type="text"
                    placeholder="Eg: How do I open my account, How do I activate F&O"
                    className="w-full rounded-md bg-white py-3 pl-12 pr-5"
                />
            </div>
        </div>
    )
}

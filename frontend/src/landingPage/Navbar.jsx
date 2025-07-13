export default function Navbar () {
    return (
        <header className="mb-15 mt-0.5 bg-white h-2 fixed">
            <nav className="flex justify-end">
                <img src="images/logo.svg" alt="logo" className="w-[8rem] h-auto mr-auto"></img>
                <ul className="flex ">
                    <li>Signup</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Pricing</li>
                    <li>Support</li>
                </ul>
            </nav>
        </header>
        
    )
}
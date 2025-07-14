import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
        <header className="mt-0.5 bg-white h-2 fixed">
            <nav className="flex justify-end">
                <img src="images/logo.svg" alt="logo" className="w-[8rem] h-auto mr-auto"></img>
                <ul className="flex">
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/support">Support</Link></li>
                </ul>
            </nav>
        </header>
        
    )
}
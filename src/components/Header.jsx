import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold">
                    <Link to="/">Car Marketplace</Link>
                </h1>

                {/* Navigation Links */}
                <nav className="space-x-6 hidden md:flex">
                    <Link to="/" className="hover:text-gray-200">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-gray-200">
                        About
                    </Link>
                    <Link to="/contact" className="hover:text-gray-200">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-6 mt-12">
            <div className="container mx-auto px-6 text-center">
                {/* Links Section */}
                <div className="space-x-6 mb-4">
                    <a href="/about" className="hover:text-gray-200">
                        About
                    </a>
                    <a href="/contact" className="hover:text-gray-200">
                        Contact
                    </a>
                    <a href="/privacy" className="hover:text-gray-200">
                        Privacy Policy
                    </a>
                </div>

                {/* Copyright Section */}
                <div className="text-sm">
                    <p>&copy; 2025 Car Marketplace. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

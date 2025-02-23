const Pagination = () => {
    return (
        <div className="flex items-center justify-center space-x-4 py-6">
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none disabled:opacity-50"
                disabled
            >
                &lt; Prev
            </button>

            <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none">
                    1
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none">
                    2
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none">
                    3
                </button>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none">
                Next &gt;
            </button>
        </div>
    );
}

export default Pagination;
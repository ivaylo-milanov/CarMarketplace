const Home = () => {
    return (
        <>
            <div className="relative w-full h-128 text-white overflow-hidden flex items-center justify-center -mb-32">
                {/* Background Image */}
                <img
                    src="./banner-image.jpg"
                    alt="Car Banner"
                    className="absolute inset-0 w-full h-full object-contain"
                />

                {/* Banner Content */}
                <div className="relative z-10 text-center px-8 bg-black/50 py-6 rounded-lg">
                    <h1 className="text-5xl font-bold">
                        Find Your Dream Car Today!
                    </h1>
                    <p className="text-2xl mt-2">
                        Explore our wide selection of featured and new cars at
                        the best prices.
                    </p>
                </div>
            </div>

            <div className="relative  container mx-auto p-4 max-w-5xl mx-auto">
                <div className="mb-8 p-4 bg-gray-100 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div>
                            <label className="block font-medium" htmlFor="make">
                                Make
                            </label>
                            <select
                                id="make"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            >
                                <option value="">Select Make</option>
                                <option value="BMW">BMW</option>
                                <option value="Audi">Audi</option>
                                <option value="Mercedes">Mercedes</option>
                                <option value="Tesla">Tesla</option>
                            </select>
                        </div>

                        <div>
                            <label
                                className="block font-medium"
                                htmlFor="model"
                            >
                                Model
                            </label>
                            <select
                                id="model"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            >
                                <option value="">Select Model</option>
                                <option value="M2">M2</option>
                                <option value="M3">M3</option>
                                <option value="A4">A4</option>
                                <option value="Q5">Q5</option>
                            </select>
                        </div>

                        <div>
                            <label
                                className="block font-medium"
                                htmlFor="registration"
                            >
                                Registration Year
                            </label>
                            <select
                                id="registration"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            >
                                <option value="">Select Year</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                            </select>
                        </div>

                        <div>
                            <label
                                className="block font-medium"
                                htmlFor="mileage"
                            >
                                Mileage
                            </label>
                            <input
                                type="number"
                                id="mileage"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="Enter mileage"
                            />
                        </div>

                        <div>
                            <label
                                className="block font-medium"
                                htmlFor="price"
                            >
                                Price (up to)
                            </label>
                            <input
                                type="number"
                                id="price"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="Enter max price"
                            />
                        </div>

                        <div>
                            <label className="block font-medium" htmlFor="city">
                                City or Zip Code
                            </label>
                            <input
                                type="text"
                                id="city"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="Enter city or zip code"
                            />
                        </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4">
                        Apply Filters
                    </button>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Featured Cars</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src="./bmw-m2.jpg"
                                alt="BMW M2"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                BMW M2
                            </h3>
                            <p className="text-gray-500 mb-2">
                                2022 | 10,000 miles
                            </p>
                            <p className="font-bold text-blue-600">$60,000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src="./bmw-m2.jpg"
                                alt="Audi A4"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Audi A4
                            </h3>
                            <p className="text-gray-500 mb-2">
                                2023 | 5,000 miles
                            </p>
                            <p className="font-bold text-blue-600">$45,000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src="./bmw-m2.jpg"
                                alt="Mercedes C-Class"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Mercedes C-Class
                            </h3>
                            <p className="text-gray-500 mb-2">
                                2021 | 15,000 miles
                            </p>
                            <p className="font-bold text-blue-600">$55,000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src="./bmw-m2.jpg"
                                alt="Tesla Model S"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Tesla Model S
                            </h3>
                            <p className="text-gray-500 mb-2">2023 | 0 miles</p>
                            <p className="font-bold text-blue-600">$85,000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src="./bmw-m2.jpg"
                                alt="Audi Q5"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Audi Q5
                            </h3>
                            <p className="text-gray-500 mb-2">2023 | 0 miles</p>
                            <p className="font-bold text-blue-600">$50,000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src="./bmw-m2.jpg"
                                alt="Porsche 911"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Porsche 911
                            </h3>
                            <p className="text-gray-500 mb-2">2023 | 0 miles</p>
                            <p className="font-bold text-blue-600">$100,000</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">
                            Show More Cars
                        </button>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">New Cars</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src="./bmw-m2.jpg"
                                alt="Tesla Model S"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Tesla Model S
                            </h3>
                            <p className="text-gray-500 mb-2">2023 | 0 miles</p>
                            <p className="font-bold text-blue-600">$85,000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src="./bmw-m2.jpg"
                                alt="Audi Q5"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Audi Q5
                            </h3>
                            <p className="text-gray-500 mb-2">2023 | 0 miles</p>
                            <p className="font-bold text-blue-600">$50,000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src="./bmw-m2.jpg"
                                alt="Porsche 911"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Porsche 911
                            </h3>
                            <p className="text-gray-500 mb-2">2023 | 0 miles</p>
                            <p className="font-bold text-blue-600">$100,000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src="./bmw-m2.jpg"
                                alt="Tesla Model S"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Tesla Model S
                            </h3>
                            <p className="text-gray-500 mb-2">2023 | 0 miles</p>
                            <p className="font-bold text-blue-600">$85,000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src="./bmw-m2.jpg"
                                alt="Audi Q5"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Audi Q5
                            </h3>
                            <p className="text-gray-500 mb-2">2023 | 0 miles</p>
                            <p className="font-bold text-blue-600">$50,000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img
                                src="./bmw-m2.jpg"
                                alt="Porsche 911"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Porsche 911
                            </h3>
                            <p className="text-gray-500 mb-2">2023 | 0 miles</p>
                            <p className="font-bold text-blue-600">$100,000</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">
                            Show More Cars
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

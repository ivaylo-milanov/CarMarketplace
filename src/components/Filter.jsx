const Filter = () => {
    return (
        <div className="bg-white p-6 shadow-xl rounded-xl w-64 self-start">
            {/* Set a fixed height */}
            <h2 className="text-xl font-semibold mb-4">Filter</h2>
            {/* Price Filter */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                    Price
                </label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    <option value="0">All</option>
                    <option value="5000">$5000</option>
                    <option value="10000">$10000</option>
                    <option value="15000">$15000</option>
                </select>
            </div>
            {/* Fuel Type Filter */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                    Fuel Type
                </label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    <option value="All">All</option>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                </select>
            </div>
            {/* Car Type Filter */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                    Car Type
                </label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    <option value="All">All</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Truck">Truck</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                    Car Type
                </label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    <option value="All">All</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Truck">Truck</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                    Car Type
                </label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    <option value="All">All</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Truck">Truck</option>
                </select>
            </div>
        </div>
    );
}


export default Filter;
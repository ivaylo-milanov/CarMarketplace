const Sorting = () => {
    return (
        <div className="mb-4 mt-6">
            <div className="flex flex-col items-start mb-4">
                <div className="text-md font-semibold text-gray-800">
                    Sort By:
                </div>
                <select className="p-2 border border-gray-300 rounded-md">
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
}

export default Sorting;
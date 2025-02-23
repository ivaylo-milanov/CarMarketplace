import AppliedFilters from "../components/AppliedFilters";
import CarsList from "../components/CarsList";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Sorting from "../components/Sorting";

const Search = () => {
    return (
        <>
            <div className="flex space-x-6 p-6 max-w-5xl mx-auto">
                <Filter />
                <div className="flex-1">
                    <div className="bg-white p-6 shadow-xl rounded-xl mb-6">
                        <AppliedFilters />
                        <Sorting />
                    </div>
                   <CarsList />
                </div>
            </div>
            <Pagination />
        </>
    );
};

export default Search;

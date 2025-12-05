import {Search} from 'lucide-react';
import { useState } from 'react';
function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search logic here
        console.log("Searching for:", searchTerm);
    };

    return (
        <form 
            className="flex items-center justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35%] p-1 bg-white rounded-full"
            onSubmit={handleSearch}
        >
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Tìm kiếm sản phẩm..." 
            className="ml-3 outline-none w-[90%]"/>
            <button type="submit" className="p-2 bg-amber-400 hover:bg-amber-600 rounded-full transition ml-2 hover:cursor-pointer">
                <Search className="text-white" size={20} />
            </button>
        </form>
    );
}

export default SearchBar;
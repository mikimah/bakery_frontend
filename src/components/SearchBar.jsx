import {Search} from 'lucide-react';
import { useState } from 'react';
import { showError } from '../utils/notify';
import { useNavigate } from 'react-router';
import { useSearch } from '../context/SearchContext.jsx';
import api from '../api/api';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const { setIsLoading, updateSearchResults } = useSearch();

    const handleSearch = async (e) => {
        e.preventDefault();
        
        // ✅ Kiểm tra nếu input rỗng
        if(searchTerm.trim() === "") {
            setIsError(true); // ✅ Highlight border
            setTimeout(() => setIsError(false), 2000); // ✅ Tắt sau 2s
            return;
        }
        
        setIsError(false); // ✅ Reset error
        setIsLoading(true);
        
        try{
            const response = await api.get(`/product/name/${searchTerm}`);
            if(response.data.status === 200){
                console.log(response.data.items);
                updateSearchResults(response.data.items, searchTerm);
                navigate('/product/search');
                setIsLoading(false); 
            }
        }catch(e){
            console.log(e);
            showError("Có lỗi xảy ra khi tìm kiếm");
            setIsLoading(false);
        }
    };

    return (
        <form 
            className={`flex items-center justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[35%] p-1 bg-white rounded-full transition border-2 ${
                isError ? 'border-amber-500 shadow-lg shadow-amber-500/50' : 'border-transparent'
            }`}
            onSubmit={handleSearch}
        >
            <input 
                type="text" 
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsError(false); // ✅ Reset khi user typing
                }} 
                placeholder="Tìm kiếm sản phẩm..." 
                className="ml-3 outline-none w-[90%] px-2 py-1"
            />
            <button type="submit" className="p-2 bg-amber-400 hover:bg-amber-600 rounded-full transition ml-2 hover:cursor-pointer">
                <Search className="text-white" size={20} />
            </button>
        </form>
    );
}

export default SearchBar;
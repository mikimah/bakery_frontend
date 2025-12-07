import { createContext, useState, useContext, useEffect } from 'react';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [searchResults, setSearchResults] = useState(() => {
        // Lấy dữ liệu từ sessionStorage khi component mount
        const saved = sessionStorage.getItem('searchResults');
        return saved ? JSON.parse(saved) : [];
    });
    
    const [searchTerm, setSearchTerm] = useState(() => {
        // Lấy từ khóa từ sessionStorage khi component mount
        return sessionStorage.getItem('searchTerm') || '';
    });
    
    const [isLoading, setIsLoading] = useState(false);

    // Lưu searchResults vào sessionStorage khi thay đổi
    useEffect(() => {
        sessionStorage.setItem('searchResults', JSON.stringify(searchResults));
    }, [searchResults]);

    // Lưu searchTerm vào sessionStorage khi thay đổi
    useEffect(() => {
        sessionStorage.setItem('searchTerm', searchTerm);
    }, [searchTerm]);

    const clearSearch = () => {
        setSearchResults([]);
        setSearchTerm('');
        sessionStorage.removeItem('searchResults');
        sessionStorage.removeItem('searchTerm');
    };

    const updateSearchResults = (results, term) => {
        setSearchResults(results);
        setSearchTerm(term);
    };

    return (
        <SearchContext.Provider
            value={{
                searchResults,
                searchTerm,
                isLoading,
                setSearchResults,
                setSearchTerm,
                setIsLoading,
                clearSearch,
                updateSearchResults,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within SearchProvider');
    }
    return context;
}
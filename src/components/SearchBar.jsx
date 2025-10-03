import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

const SearchBar = ({ placeholder = "Search scarves...", className = "" }) => {
  const [localQuery, setLocalQuery] = useState('');
  const { query, setSearchQuery, clearSearch } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(localQuery);
  };

  const handleClear = () => {
    setLocalQuery('');
    clearSearch();
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
        />
        
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        
        {localQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <button
        type="submit"
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-primary-800 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;











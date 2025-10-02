import React, { createContext, useContext, useReducer } from 'react';

const SearchContext = createContext();

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        query: action.payload
      };
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        results: action.payload
      };
    case 'CLEAR_SEARCH':
      return {
        ...state,
        query: '',
        results: []
      };
    default:
      return state;
  }
};

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, {
    query: '',
    results: []
  });

  const setSearchQuery = (query) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  };

  const setSearchResults = (results) => {
    dispatch({ type: 'SET_SEARCH_RESULTS', payload: results });
  };

  const clearSearch = () => {
    dispatch({ type: 'CLEAR_SEARCH' });
  };

  const value = {
    query: state.query,
    results: state.results,
    setSearchQuery,
    setSearchResults,
    clearSearch
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};






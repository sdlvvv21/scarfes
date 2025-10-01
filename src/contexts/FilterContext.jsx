import React, { createContext, useContext, useReducer } from 'react';

const FilterContext = createContext();

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload
      };
    case 'SET_PRICE_RANGE':
      return {
        ...state,
        priceRange: action.payload
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.payload
      };
    case 'SET_MATERIAL':
      return {
        ...state,
        material: action.payload
      };
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload
      };
    case 'CLEAR_FILTERS':
      return {
        category: '',
        priceRange: { min: 0, max: 1000 },
        color: '',
        material: '',
        sortBy: 'featured'
      };
    default:
      return state;
  }
};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    category: '',
    priceRange: { min: 0, max: 1000 },
    color: '',
    material: '',
    sortBy: 'featured'
  });

  const setCategory = (category) => {
    dispatch({ type: 'SET_CATEGORY', payload: category });
  };

  const setPriceRange = (priceRange) => {
    dispatch({ type: 'SET_PRICE_RANGE', payload: priceRange });
  };

  const setColor = (color) => {
    dispatch({ type: 'SET_COLOR', payload: color });
  };

  const setMaterial = (material) => {
    dispatch({ type: 'SET_MATERIAL', payload: material });
  };

  const setSortBy = (sortBy) => {
    dispatch({ type: 'SET_SORT_BY', payload: sortBy });
  };

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  const value = {
    filters: state,
    setCategory,
    setPriceRange,
    setColor,
    setMaterial,
    setSortBy,
    clearFilters
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

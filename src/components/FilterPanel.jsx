import React from 'react';
import { useFilter } from '../contexts/FilterContext';
import { categories, colors, materials } from '../data/products';

const FilterPanel = ({ className = "" }) => {
  const { filters, setCategory, setPriceRange, setColor, setMaterial, setSortBy, clearFilters } = useFilter();

  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-200 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-primary-600 hover:text-primary-700 transition-colors duration-200"
        >
          Clear All
        </button>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
        <select
          value={filters.sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={filters.category === category.id}
                onChange={(e) => setCategory(e.target.value)}
                className="mr-2 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700 capitalize">
                {category.name} ({category.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.priceRange.min}
            onChange={(e) => setPriceRange({ ...filters.priceRange, min: Number(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.priceRange.max}
            onChange={(e) => setPriceRange({ ...filters.priceRange, max: Number(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Color */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
        <select
          value={filters.color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
        >
          <option value="">All Colors</option>
          {colors.map((color) => (
            <option key={color} value={color} className="capitalize">
              {color}
            </option>
          ))}
        </select>
      </div>

      {/* Material */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Material</label>
        <select
          value={filters.material}
          onChange={(e) => setMaterial(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
        >
          <option value="">All Materials</option>
          {materials.map((material) => (
            <option key={material} value={material} className="capitalize">
              {material}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;











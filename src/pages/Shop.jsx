import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import { useSearch } from '../contexts/SearchContext';
import { useFilter } from '../contexts/FilterContext';
import { products } from '../data/products';
import { filterProducts } from '../utils/helpers';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import { Grid, List, SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const { query } = useSearch();
  const { filters } = useFilter();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = filterProducts(products, query, filters);
    setFilteredProducts(filtered);
  }, [query, filters]);

  return (
    <PageTransition className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('shop.title')}</h1>
          <p className="text-gray-600 mb-6">
            {t('shop.subtitle')}
          </p>
          
          {/* Search and Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="w-full lg:w-96">
              <SearchBar placeholder={t('shop.searchPlaceholder')} />
            </div>
            
            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-white rounded-lg border border-gray-300">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary-800 text-white' : 'text-gray-600 hover:text-primary-800'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary-800 text-white' : 'text-gray-600 hover:text-primary-800'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
              >
                <SlidersHorizontal className="w-4 h-4" />
                {t('shop.filters')}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0" data-aos="fade-right">
            <FilterPanel />
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mb-6">
              <FilterPanel />
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {t('shop.results', { count: filteredProducts.length, total: products.length })}
              </p>
              
              {/* Sort Dropdown */}
              <select
                value={filters.sortBy}
                onChange={(e) => useFilter().setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              >
                <option value="featured">{t('shop.sortOptions.featured')}</option>
                <option value="price-low">{t('shop.sortOptions.priceLow')}</option>
                <option value="price-high">{t('shop.sortOptions.priceHigh')}</option>
                <option value="rating">{t('shop.sortOptions.rating')}</option>
                <option value="newest">{t('shop.sortOptions.newest')}</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'space-y-4'
              }>
                {filteredProducts.map((product, idx) => (
                  <div key={product.id} data-aos="fade-up" data-aos-delay={idx * 50}>
                    <ProductCard
                      product={product}
                      className={viewMode === 'list' ? 'flex flex-row' : ''}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{t('shop.noResults.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('shop.noResults.subtitle')}
                </p>
                <button
                  onClick={() => {
                    useSearch().clearSearch();
                    useFilter().clearFilters();
                  }}
                  className="bg-primary-800 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  {t('shop.noResults.clearFilters')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Shop;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import SearchBar from './SearchBar';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-800 font-heading">Scarfes</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-800 transition-colors duration-200">
              {t('navigation.home')}
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-primary-800 transition-colors duration-200">
              {t('navigation.shop')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-800 transition-colors duration-200">
              {t('navigation.about')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-800 transition-colors duration-200">
              {t('navigation.contact')}
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-primary-800 transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-primary-800 transition-colors duration-200"
            >
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-primary-800 transition-colors duration-200">
                  <User className="w-5 h-5" />
                  <span className="text-sm">{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {t('navigation.myOrders')}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {t('navigation.logout')}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary-800 transition-colors duration-200"
                >
                  {t('navigation.login')}
                </Link>
                <Link
                  to="/signup"
                  className="bg-primary-800 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  {t('navigation.signup')}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-primary-800 transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-primary-800 transition-colors duration-200"
            >
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary-800 transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Drawer (all sizes) */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <SearchBar placeholder={t('shop.searchPlaceholder')} />
          </div>
        )}

        {/* Mobile Slide-in Menu */}
        <div className={`md:hidden fixed inset-0 z-40 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-40' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Drawer */}
          <div
            className={`absolute top-0 right-0 h-full w-72 max-w-[85%] bg-white shadow-xl border-l border-gray-200 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            role="dialog"
            aria-modal="true"
          >
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <span className="text-lg font-semibold">{t('common.menu')}</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-700 hover:text-primary-800 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary-800 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('navigation.home')}</Link>
              <Link to="/shop" className="text-gray-700 hover:text-primary-800 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('navigation.shop')}</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-800 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('navigation.about')}</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary-800 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('navigation.contact')}</Link>
              {isAuthenticated ? (
                <>
                  <Link to="/orders" className="text-gray-700 hover:text-primary-800 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('navigation.myOrders')}</Link>
                  <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="text-left text-gray-700 hover:text-primary-800 transition-colors duration-200">{t('navigation.logout')}</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-primary-800 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('navigation.login')}</Link>
                  <Link to="/signup" className="bg-primary-800 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>{t('navigation.signup')}</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

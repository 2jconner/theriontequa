import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  Heart, 
  MessageCircle, 
  User, 
  Menu, 
  X,
  Bell
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src="/therionlogo.png" alt="Therion Tequa" className="h-10 w-auto" />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
              Therion Tequa
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className={`relative w-full transition-all duration-200 ${
              isSearchFocused ? 'transform scale-105' : ''
            }`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for pets, breeds, or breeders..."
                className="w-full pl-10 pr-4 py-2.5 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/marketplace" 
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                isActive('/marketplace') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-amber-800 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Browse Pets
            </Link>
            <Link 
              to="/reviews" 
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                isActive('/reviews') 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-amber-800 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Reviews
            </Link>
            
            {/* User Actions */}
            <div className="flex items-center space-x-3">
              <button className="p-2 text-amber-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors relative">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 text-amber-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors relative">
                <MessageCircle className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
              <button className="p-2 text-amber-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-amber-700 hover:text-orange-600 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search pets, breeds, breeders..."
              className="w-full pl-10 pr-4 py-2.5 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-orange-100">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/marketplace" 
              className="block px-3 py-2 text-amber-800 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Pets
            </Link>
            <Link 
              to="/reviews" 
              className="block px-3 py-2 text-amber-800 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <div className="flex items-center justify-between pt-3 border-t border-orange-100">
              <div className="flex space-x-3">
                <button className="p-2 text-amber-700 hover:text-orange-600 rounded-lg">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 text-amber-700 hover:text-orange-600 rounded-lg">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="p-2 text-amber-700 hover:text-orange-600 rounded-lg">
                  <Bell className="w-5 h-5" />
                </button>
              </div>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
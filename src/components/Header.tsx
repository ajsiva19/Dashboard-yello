import React, { useState } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            
        
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-4">
              <a href="#dashboard" className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Dashboard
              </a>
              <a href="#tours" className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                All Tours
              </a>
            </nav>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Search size={20} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <User size={20} className="text-gray-600" />
              </button>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Create New +
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-3 space-y-1">
            <a href="#dashboard" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
              Dashboard
            </a>
            <a href="#tours" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
              All Tours
            </a>
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-3">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Search size={20} className="text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
                  <Bell size={20} className="text-gray-600" />
                  <span className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <User size={20} className="text-gray-600" />
                </button>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Create New +
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
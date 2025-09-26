import React, { useState, useEffect, useRef } from 'react';
import { Menu, Search, Bell, Mail, ChevronDown } from 'react-feather';

const Header = ({ onSidebarToggle }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="glass-nav sticky top-0 z-50 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Sidebar toggle and search */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="text-gray-500 dark:text-gray-400 hover:text-cosmic-600 dark:hover:text-cosmic-400"
            >
              <Menu size={20} />
            </button>

            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cosmic-500 focus:border-transparent"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* Right side - User controls */}
          <div className="flex items-center space-x-4">
            <button className="relative p-1 text-gray-500 dark:text-gray-400 hover:text-cosmic-600 dark:hover:text-cosmic-400 rounded-full">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            </button>

            <button className="relative p-1 text-gray-500 dark:text-gray-400 hover:text-cosmic-600 dark:hover:text-cosmic-400 rounded-full">
              <Mail size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-cosmic-500"></span>
            </button>

            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cosmic-500 to-nebula-500 flex items-center justify-center text-white font-medium">
                  JD
                </div>
                <span className="hidden md:inline-block">John Doe</span>
                <ChevronDown size={16} className="hidden md:inline-block" />
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 py-1 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Your Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

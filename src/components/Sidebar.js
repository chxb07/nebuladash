import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grid, BarChart2, Users, MessageSquare, Settings, HelpCircle, Zap, Moon, Sun } from 'react-feather';

const Sidebar = ({ isCollapsed, onToggle }) => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', newDarkMode);
  };

  const navItems = [
    { to: '/', icon: Grid, label: 'Dashboard' },
    { to: '/analytics', icon: BarChart2, label: 'Analytics' },
    { to: '/users', icon: Users, label: 'Users' },
    { to: '/messages', icon: MessageSquare, label: 'Messages' },
    { to: '/settings', icon: Settings, label: 'Settings' },
    { to: '/help', icon: HelpCircle, label: 'Help' },
  ];

  return (
    <aside className={`flex flex-col bg-white dark:bg-gray-800 shadow-md transition-all duration-300 ease-in-out overflow-hidden ${isCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cosmic-500 to-nebula-500 flex items-center justify-center">
            <Zap className="text-white" size={16} />
          </div>
          {!isCollapsed && <span className="text-xl font-semibold whitespace-nowrap">NebulaDash</span>}
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                    isActive
                      ? 'bg-cosmic-100 dark:bg-gray-700 text-cosmic-600 dark:text-cosmic-400 font-medium'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={18} />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>

        {!isCollapsed && (
          <div className="mt-8 px-2">
            <div className="bg-gradient-to-r from-cosmic-500 to-nebula-500 rounded-xl p-4 text-white">
              <h3 className="text-sm font-semibold mb-1">Upgrade to Pro</h3>
              <p className="text-xs mb-3 opacity-90">Unlock all features</p>
              <button className="w-full bg-white text-cosmic-600 text-xs font-medium py-1.5 px-3 rounded-lg hover:bg-opacity-90 transition">
                Upgrade Now
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={toggleDarkMode}
          className="flex items-center space-x-2 w-full text-gray-600 dark:text-gray-300 hover:text-cosmic-600 dark:hover:text-cosmic-400"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          {!isCollapsed && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

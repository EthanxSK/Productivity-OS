import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Target, 
  Clock, 
  StickyNote,
  Menu,
  X
} from 'lucide-react';

const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/tasks', icon: CheckSquare, label: 'Tasks' },
  { path: '/habits', icon: Target, label: 'Habits' },
  { path: '/focus', icon: Clock, label: 'Focus' },
  { path: '/notes', icon: StickyNote, label: 'Notes' },
];

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between px-3 py-2">
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ✨ Productivity OS
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-gray-600 bg-opacity-50" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`
        bg-white dark:bg-gray-800 shadow-lg
        lg:relative lg:translate-x-0 lg:w-64 lg:h-screen
        ${isOpen ? 'fixed inset-y-0 left-0 z-50 w-64 transform translate-x-0' : 'fixed inset-y-0 left-0 z-50 w-64 transform -translate-x-full'}
        lg:transform-none
        transition-transform duration-300 ease-in-out
      `}>
        <div className="p-4 lg:p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ✨ Productivity OS
          </h1>
          <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 mt-1">
            Your personal workspace
          </p>
        </div>
        
        <nav className="mt-4 lg:mt-8">
          <div className="px-2 lg:px-4 space-y-1 lg:space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-3 lg:px-4 py-2 lg:py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};
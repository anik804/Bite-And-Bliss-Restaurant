import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { FaHome, FaUtensils, FaShoppingCart, FaPlusCircle, FaBars, FaTimes } from 'react-icons/fa';

const Dashboard = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      name: 'Dashboard Home',
      path: '/dashboard',
      icon: <FaHome />,
    },
    {
      name: 'My Food',
      path: '/dashboard/myfood',
      icon: <FaUtensils />,
    },
    {
      name: 'My Orders',
      path: '/dashboard/myorders',
      icon: <FaShoppingCart />,
    },
    {
      name: 'Add Food',
      path: '/dashboard/addfood',
      icon: <FaPlusCircle />,
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-md p-4 mt-20 flex items-center justify-between sticky top-0 z-30">
        <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className={`pt-20
          fixed lg:static inset-y-0 left-0 z-40
          w-64 bg-white shadow-lg h-screen
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-6 h-full flex flex-col">
            <h2 className="hidden lg:block text-xl font-bold text-gray-800 mb-6">Dashboard</h2>
            <nav className="flex-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg mb-2 transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;

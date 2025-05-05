import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaWallet, FaNewspaper, FaCoins, FaCog, FaEnvelope, FaBars, FaArrowLeft } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized((prev) => !prev);
  };

  const menuItems = [
    { name: 'Home', icon: <FaHome />, path: '/dashboard' },
    { name: 'Wallet', icon: <FaWallet />, path: '/wallet' },
    { name: 'News', icon: <FaNewspaper />, path: '/news' },
    { name: 'Stock & Fund', icon: <FaCoins />, path: '/stock-and-fund' }
  ];
  
  const items = [
    { name: 'Settings', icon: <FaCog />, path: '/settings' },
    { name: 'Profile', icon: <CgProfile />, path: '/profile' },
  ];

  return (
    <div
      className={`bg-zinc-900 text-white h-screen ${
        isMinimized ? 'w-14' : 'w-48'
      } p-4 fixed transition-all duration-300 z-50`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-[-12px] bg-green-500 text-white rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        {isMinimized ? <FaBars /> : <FaArrowLeft />}
      </button>

      {/* Logo Section */}
      <div className="flex items-center justify-between mb-8">
        {!isMinimized && <h2 className="text-2xl font-bold text-green-500">GoStock</h2>}
      </div>
      
      {/* Main Menu */}
      <nav>
        <ul className={`space-y-6 ${isMinimized ? 'mt-12' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 cursor-pointer transition-all duration-200 ${
                    isActive ? 'text-green-500' : 'text-gray-400 hover:text-green-400'
                  }`
                }
                title={item.name}
              >
                {item.icon}
                {!isMinimized && <span>{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer to push items to the bottom */}
      <div className="flex-grow"></div>

      {/* Bottom Section */}
      <nav>
        <ul className="space-y-6 mt-44">
          {items.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 cursor-pointer transition-all duration-200 ${
                    isActive ? 'text-green-500' : 'text-gray-400 hover:text-green-400'
                  }`
                }
                title={item.name}
              >
                {item.icon}
                {!isMinimized && <span>{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const DashboardLayout = () => {
  return (
    <div className="flex bg-black dark:bg-black min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-1 bg-black text-white">
        {/* Navbar */}
        <Navbar />

        <div className="p-8 text-gray-200 transition-all duration-300 ease-in-out">
          {/* Outlet for other pages */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

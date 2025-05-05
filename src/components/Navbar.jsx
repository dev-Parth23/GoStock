import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
      navigate('/');
    } else {
      setUsername(user.username || 'User');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <div className="bg-zinc-950 flex justify-between items-center px-10 py-4 shadow-sm ml-48 shadow-b shadow-green-400">
      
      {/* Search Input */}
      <div className="flex items-center w-full max-w-md">
        <div className="relative w-full">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
          <input
            type="text"
            placeholder="Search for stocks"
            className="pl-10 pr-4 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-black text-white placeholder-gray-400 w-full"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        
        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 cursor-pointer hover:bg-green-700 rounded-lg p-2 transition-all duration-300 text-white"
        >
          Logout <IoExitOutline />
        </button>

        {/* Profile Link */}
        <NavLink
          to="/profile"
          className="flex items-center gap-2 cursor-pointer hover:bg-green-700 rounded-lg p-2 transition-all duration-300"
        >
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--men-people-male-pack-avatars-icons-5187871.png?f=webp"
            alt="Profile"
            className="rounded-full w-8 h-8 border-2 border-green-600"
          />
          <span className="font-semibold text-white text-sm">{username}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

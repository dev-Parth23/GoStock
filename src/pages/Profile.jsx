import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Profile = () => {
  const userProfile = {
    name: "Parth Singhal",
    email: "parthsinghal23.cs@gmail.com",
    phone: "+91 9368353165",
    location: "Ghaziabad, India",
    avatar: "https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--men-people-male-pack-avatars-icons-5187871.png?f=webp",
    bio: "Passionate investor focused on technology and sustainable energy sectors. Always looking to learn and grow in the financial markets.",
    joinDate: "Member since July 2023",
    stats: {
      portfolioValue: "$25,432",
      totalTrades: 145,
      successRate: "68%"
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 ml-48 text-white"> {/* Adjusted for dark theme and margin */}
      <h1 className="text-2xl font-bold mb-8 text-green-400">My Profile</h1>
      
      <div className="bg-zinc-800 rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center space-y-4">
            <img 
              src={userProfile.avatar} 
              alt="Profile" 
              className="rounded-full w-32 h-32 object-cover"
            />
            <p className="text-sm text-zinc-400">{userProfile.joinDate}</p>
          </div>

          {/* Profile Details Section */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaUser className="text-zinc-400" />
                <div>
                  <p className="text-sm text-zinc-400">Full Name</p>
                  <p className="font-medium">{userProfile.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-zinc-400" />
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <p className="font-medium">{userProfile.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-zinc-400" />
                <div>
                  <p className="text-sm text-zinc-400">Phone</p>
                  <p className="font-medium">{userProfile.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-zinc-400" />
                <div>
                  <p className="text-sm text-zinc-400">Location</p>
                  <p className="font-medium">{userProfile.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-zinc-400">Bio</p>
              <p className="mt-2">{userProfile.bio}</p>
            </div>
          </div>
        </div>

        {/* Trading Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-700 p-4 rounded-lg">
            <p className="text-sm text-zinc-400">Portfolio Value</p>
            <p className="text-xl font-bold text-green-500">{userProfile.stats.portfolioValue}</p>
          </div>
          <div className="bg-zinc-700 p-4 rounded-lg">
            <p className="text-sm text-zinc-400">Total Trades</p>
            <p className="text-xl font-bold">{userProfile.stats.totalTrades}</p>
          </div>
          <div className="bg-zinc-700 p-4 rounded-lg">
            <p className="text-sm text-zinc-400">Success Rate</p>
            <p className="text-xl font-bold text-blue-400">{userProfile.stats.successRate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from 'react';
import { FaUser, FaBell, FaLock, FaLanguage, FaQuestionCircle } from 'react-icons/fa';

const Settings = () => {
  const settingsSections = [
    {
      id: 1,
      title: "Account Settings",
      icon: <FaUser className="text-green-400" />,
      items: [
        { name: "Edit Profile", description: "Update your personal information" },
        { name: "Change Email", description: "Modify your email address" },
        { name: "Phone Number", description: "Add or change phone number" }
      ]
    },
    {
      id: 2, 
      title: "Notifications",
      icon: <FaBell className="text-green-400" />,
      items: [
        { name: "Push Notifications", description: "Manage mobile notifications" },
        { name: "Email Alerts", description: "Configure email alert preferences" },
        { name: "Price Alerts", description: "Set up stock price notifications" }
      ]
    },
    {
      id: 3,
      title: "Security",
      icon: <FaLock className="text-green-400" />,
      items: [
        { name: "Change Password", description: "Update your password" },
        { name: "Two-Factor Authentication", description: "Enable 2FA security" },
        { name: "Login History", description: "View recent account activity" }
      ]
    },
    {
      id: 4,
      title: "Preferences",
      icon: <FaLanguage className="text-green-400" />,
      items: [
        { name: "Language", description: "Change display language" },
        { name: "Time Zone", description: "Set your local time zone" },
        { name: "Theme", description: "Choose light or dark mode" }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 ml-48 text-white"> {/* Dark theme and margin */}
      <h1 className="text-2xl font-bold mb-8 text-green-400">Settings</h1>
      
      <div className="space-y-6">
        {settingsSections.map((section) => (
          <div key={section.id} className="bg-zinc-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              {section.icon}
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            
            <div className="space-y-4">
              {section.items.map((item) => (
                <div 
                  key={item.name}
                  className="flex items-center justify-between p-3 hover:bg-zinc-700 rounded-lg cursor-pointer"
                >
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-zinc-400">{item.description}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    Edit
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="flex items-center gap-2 text-zinc-400 hover:text-zinc-300">
          <FaQuestionCircle />
          <span>Need help with settings?</span>
        </button>
      </div>
    </div>
  );
};

export default Settings;

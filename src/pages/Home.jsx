import React from 'react';
import MostBought from '../components/MostBought';
import HighestGainer from '../components/HighestGainer';
import HighestLoser from '../components/HighestLoser';
import TrendingStocks from '../components/TrendingStocks';

const Home = () => {
  return (
    <div className="p-2 ml-48 bg-black text-white min-h-screen transition-all duration-300 ease-in-out">
      <h1 className="text-4xl font-extrabold text-green-500 mb-3">Welcome to GoStock</h1>
      <p className="text-lg text-gray-400 mb-10">Track and analyze the latest stocks, trends, and market moves in real-time.</p>

      {/* Stock Highlights Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-gradient-to-br from-black to-green-900 rounded-lg shadow-2xl hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl">
          <MostBought />
        </div>
        <div className="p-6 bg-gradient-to-br from-black to-green-900 rounded-lg shadow-2xl hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl">
          <HighestGainer />
        </div>
        <div className="p-6 bg-gradient-to-br from-black to-green-900 rounded-lg shadow-2xl hover:scale-105 transform transition-all duration-500 ease-out hover:shadow-2xl">
          <HighestLoser />
        </div>
      </div>

      {/* Trending Stocks Section */}
      <div className="bg-gradient-to-br from-black to-green-900 p-8 rounded-3xl shadow-2xl hover:shadow-2xl transform transition-all duration-500 ease-out">
        <TrendingStocks />
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Wallet = () => {
  const portfolioSummary = {
    totalValue: 25432.89,
    todayChange: 345.67,
    todayPercentage: 1.38,
    totalGain: 2345.67,
    totalGainPercentage: 10.15
  };

  const holdings = [
    {
      id: 1,
      symbol: 'APPLE',
      name: 'Apple Inc.',
      shares: 15,
      avgPrice: 150.23,
      currentPrice: 178.72,
      value: 2680.80,
      gain: 427.35,
      gainPercentage: 18.96,
      path: "/apple",
    },
    {
      id: 2,
      symbol: 'GOOGLE',
      name: 'Alphabet Inc.',
      shares: 10,
      avgPrice: 115.45,
      currentPrice: 125.23,
      value: 1252.30,
      gain: 97.80,
      gainPercentage: 8.47,
      path: "/google",
    },
    {
      id: 3,
      symbol: 'TESLA',
      name: 'Tesla, Inc.',
      shares: 8,
      avgPrice: 228.90,
      currentPrice: 256.60,
      value: 2052.80,
      gain: 221.60,
      gainPercentage: 12.10,
      path: "/tesla",
    }
  ];

  return (
    <div className="space-y-6 ml-48">
      <h1 className="text-2xl font-semibold text-zinc-200 mb-8">My Portfolio</h1>

      {/* Portfolio Summary Card */}
      <div className="bg-zinc-900 shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-800 p-4 rounded-lg">
            <p className="text-gray-400">Total Portfolio Value</p>
            <p className="text-2xl font-bold text-zinc-200">${portfolioSummary.totalValue.toLocaleString()}</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <p className="text-gray-400">Today's Change</p>
            <div className="flex items-center gap-2">
              <span className={`text-xl font-bold ${portfolioSummary.todayChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                ${Math.abs(portfolioSummary.todayChange).toLocaleString()}
              </span>
              <span className={`flex items-center ${portfolioSummary.todayChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {portfolioSummary.todayChange >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                {portfolioSummary.todayPercentage}%
              </span>
            </div>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <p className="text-gray-400">Total Gain/Loss</p>
            <div className="flex items-center gap-2">
              <span className={`text-xl font-bold ${portfolioSummary.totalGain >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                ${Math.abs(portfolioSummary.totalGain).toLocaleString()}
              </span>
              <span className={`flex items-center ${portfolioSummary.totalGain >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {portfolioSummary.totalGain >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                {portfolioSummary.totalGainPercentage}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-zinc-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Shares</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Avg Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Current Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Gain/Loss</th>
            </tr>
          </thead>
          <tbody className="bg-zinc-900 divide-y divide-zinc-700">
            {holdings.map((stock) => (
             <tr
             key={stock.id}
             className="hover:bg-zinc-800 cursor-pointer"
             onClick={() => (window.location.href = stock.path)}
           >
                <td className="px-6 py-4">
                  <div className="font-medium text-zinc-200 truncate">{stock.symbol}</div>
                  <div className="text-sm text-zinc-400">{stock.name}</div>
                </td>
                <td className="px-6 py-4 text-zinc-200">{stock.shares}</td>
                <td className="px-6 py-4 text-zinc-200">${stock.avgPrice.toFixed(2)}</td>
                <td className="px-6 py-4 text-zinc-200">${stock.currentPrice.toFixed(2)}</td>
                <td className="px-6 py-4 text-zinc-200">${stock.value.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <div className={`flex items-center gap-2 ${stock.gain >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <span>${Math.abs(stock.gain).toLocaleString()}</span>
                    <span className="flex items-center">
                      {stock.gain >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                      {stock.gainPercentage}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;

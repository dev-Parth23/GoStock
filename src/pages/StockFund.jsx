import React, { useState } from 'react';
import { FaSearch, FaChartLine, FaInfoCircle } from 'react-icons/fa';

const StockFund = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stockData = [
    {
      id: 1,
      symbol: 'APPL',
      name: 'Apple Inc.',
      price: 178.72,
      change: +2.45,
      prediction: 'Bullish',
      confidence: 78,
      path: "/apple",
    },
    {
      id: 2,
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 125.23,
      change: -1.15,
      prediction: 'Neutral',
      confidence: 65,
      path: "/google",
    },
    {
      id: 3,
      symbol: 'TSLA',
      name: 'Tesla, Inc.',
      price: 256.60,
      change: +5.78,
      prediction: 'Bullish',
      confidence: 82,
      path: "/tesla",
    },
  ];

  const filteredStocks = stockData.filter((stock) =>
    stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    stock.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 ml-48">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-zinc-100">Stock Predictions</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search stocks..."
              className="pl-10 pr-4 py-2 border border-zinc-600 rounded-lg bg-zinc-800 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-lg shadow-lg">
        <div className="p-6">
          <table className="w-full">
            <thead className="bg-zinc-800">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Symbol</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Name</th>
                <th className="text-right py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Price</th>
                <th className="text-right py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">24h Change</th>
                <th className="text-center py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Prediction</th>
                <th className="text-right py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Confidence</th>
                <th className="text-right py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-zinc-900 divide-y divide-zinc-700">
              {filteredStocks.map((stock) => (
                <tr
                  key={stock.id}
                  className="hover:bg-zinc-800 cursor-pointer"
                  onClick={() => (window.location.href = stock.path)}
                >
                  <td className="py-4 px-4 font-medium text-zinc-200">{stock.symbol}</td>
                  <td className="py-4 px-4 text-zinc-400">{stock.name}</td>
                  <td className="py-4 px-4 text-right text-zinc-200">${stock.price}</td>
                  <td
                    className={`py-4 px-4 text-right ${
                      stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stock.change >= 0 ? '+' : ''}
                    {stock.change}%
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-sm text-center w-24 ${
                        stock.prediction === 'Bullish'
                          ? 'bg-green-100 text-green-800'
                          : stock.prediction === 'Bearish'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {stock.prediction}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right text-zinc-200">{stock.confidence}%</td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">
                      <FaChartLine />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <FaInfoCircle />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4">Market Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-800 p-4 rounded-lg">
            <h3 className="text-zinc-400 mb-2">Market Sentiment</h3>
            <p className="text-2xl font-bold text-green-600">Positive</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <h3 className="text-zinc-400 mb-2">Trading Volume</h3>
            <p className="text-2xl font-bold text-zinc-200">$425.8B</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <h3 className="text-zinc-400 mb-2">Active Stocks</h3>
            <p className="text-2xl font-bold text-zinc-200">2,847</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockFund;

import React from 'react';
import { NavLink } from 'react-router-dom';

const TrendingStocks = () => {
  const stocks = [
    { name: 'Meta', ticker: 'META', price: '$140.45', change: '+1.10%', path:"/meta" },
    { name: 'Amazon', ticker: 'AMZN', price: '$3,240.50', change: '-0.50%', path:"/amazon" },
    { name: 'NVIDIA', ticker: 'NVDA', price: '$210.35', change: '+2.30%', path:"/nvidia" },
  ];

  return (
    <div className="bg-zinc-900 shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-green-400 mb-4">Trending Stocks</h2>
      <ul>
        {stocks.map((stock, index) => (
        <NavLink to={stock.path} key={index}>
         <li
            key={index}
            className="flex justify-between items-center py-2 border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800 transition duration-300"
            >
            <div>
              <span className="block text-zinc-200 font-medium">{stock.name} ({stock.ticker})</span>
              <span className="text-sm text-zinc-400">{stock.price}</span>
            </div>
            <span
              className={`font-semibold ${
                stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}
              >
              {stock.change}
            </span>
          </li>
        </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default TrendingStocks;

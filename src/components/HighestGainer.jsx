import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink

const HighestGainer = () => {
  const stocks = [
    { name: 'Tesla', ticker: 'TSLA', change: '+5.24%', path: '/tesla' },
    { name: 'Netflix', ticker: 'NFLX', change: '+4.89%', path: '/netflix' },
    { name: 'Spotify', ticker: 'SPOT', change: '+3.72%', path: '/spotify' },
  ];

  return (
    <div className="bg-zinc-900 shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-green-400 mb-4">Highest Gainer</h2>
      <ul>
        {stocks.map((stock, index) => (
          <NavLink to={stock.path} key={index}>
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800 transition duration-300"
          >
            <span className="text-zinc-200">{stock.name} ({stock.ticker})</span>
            <span className="text-green-500 font-semibold">{stock.change}</span>
          </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default HighestGainer;

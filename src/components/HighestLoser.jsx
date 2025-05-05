import React from 'react';
import { NavLink } from 'react-router-dom';

const HighestLoser = () => {
  const stocks = [
    { name: 'Airbnb', ticker: 'ABNB', change: '-10.29%', path:"/airbnb" },
    { name: 'Shopify', ticker: 'SHOP', change: '-6.48%', path:"/shopify" },
    { name: 'Dropbox', ticker: 'DBX', change: '-3.08%', path:"/dropbox" },
  ];

  return (
    <div className="bg-zinc-900 shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-red-400 mb-4">Highest Loser</h2>
      <ul>
        {stocks.map((stock, index) => (
        <NavLink to={stock.path} key={index}>
         <li
            key={index}
            className="flex justify-between items-center py-2 border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800 transition duration-300"
          >
            <span className="text-zinc-200">{stock.name} ({stock.ticker})</span>
            <span className="text-red-500 font-semibold">{stock.change}</span>
          </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default HighestLoser;

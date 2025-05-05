import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink

const MostBought = () => {
  const stocks = [
    { name: 'Apple', ticker: 'AAPL', price: '$150.70', path: '/apple' },
    { name: 'Microsoft', ticker: 'MSFT', price: '$240.98', path: '/microsoft' },
    { name: 'Google', ticker: 'GOOGL', price: '$99.12', path: '/google' },
  ];

  return (
    <div className="bg-zinc-900 shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold text-green-400 mb-4">Most Bought</h2>
      <ul>
        {stocks.map((stock, index) => (
          <NavLink to={stock.path} key={index}> {/* Use stock.path */}
            <li className="flex justify-between items-center py-2 border-b border-zinc-700 last:border-b-0 hover:bg-zinc-800 transition duration-300">
              <span className="text-zinc-200">{stock.name} ({stock.ticker})</span>
              <span className="text-green-500 font-semibold">{stock.price}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default MostBought;

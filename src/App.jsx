import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/Dashboard';

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import News from './pages/News';
import StockAndFund from './pages/StockFund';
import Settings from './pages/Setting';
import AuthPage from './pages/AuthPage';
import Profile from './pages/Profile';

import Apple from './stocks/Apple';
import Airbnb from './stocks/Airbnb';
import Amazon from './stocks/Amazon'
import Dropbox from './stocks/Dropbox'
import Google from './stocks/Google'
import Meta from './stocks/Meta'
import Microsoft from './stocks/Microsoft'
import Netflix from './stocks/Netflix'
import Nvidia from './stocks/Nvidia'
import Shopify from './stocks/Shopify'
import Spotify from './stocks/Spotify'
import Tesla from './stocks/Tesla';

const App = () => {
  return (

    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<AuthPage />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/news" element={<News />} />
          <Route path="/stock-and-fund" element={<StockAndFund />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/apple" element={<Apple />} />
          <Route path="/tesla" element={<Tesla />} />
          <Route path="/airbnb" element={<Airbnb />} />
          <Route path="/amazon" element={<Amazon />} />
          <Route path="/dropbox" element={<Dropbox />} />
          <Route path="/google" element={<Google />} />
          <Route path="/microsoft" element={<Microsoft />} />
          <Route path="/netflix" element={<Netflix />} />
          <Route path="/nvidia" element={<Nvidia />} />
          <Route path="/shopify" element={<Shopify />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/meta" element={<Meta />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

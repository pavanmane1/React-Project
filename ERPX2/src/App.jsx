import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar'; // Import the Navbar component
import Home from './pages/home'; // Ensure Home is correctly imported
import Dashboard from './pages/dashboard'; // Import your Dashboard component
import { Outlet } from 'react-router-dom';
import Login from './pages/Login'
import CurrencyMaster from './pages/courrencyMaster'
import CountryStateCity from './pages/Countrystatecity'
import CountryMaster from './pages/countryMaster'
import CountrywiseCourrency from './pages/CountryWiseCurrency'
const Layout = () => (
  <>
    <Navbar />

  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/account/Currency" element={<CurrencyMaster />} />
          <Route path="/account/Country" element={<CountrywiseCourrency />} />
          <Route path="/account/LocationMaster" element={<CountryStateCity />} />
        </Route>
      </Routes>
    </Router>
    // <Login />
  );
};

export default App;

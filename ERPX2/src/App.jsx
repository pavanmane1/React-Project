import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar'; // Import the Navbar component
import Home from './pages/home'; // Ensure Home is correctly imported
import Dashboard from './pages/dashboard'; // Import your Dashboard component
import { Outlet } from 'react-router-dom';
import Login from './pages/Login'
import CurrencyMaster from './Components/CurrencyMaster'
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
        </Route>
      </Routes>
    </Router>
    // <Login />
  );
};

export default App;

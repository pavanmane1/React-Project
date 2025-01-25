import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar'; // Import the Navbar component
import Home from './pages/home'; // Ensure Home is correctly imported
import Dashboard from './pages/dashboard'; // Import your Dashboard component
import { Outlet } from 'react-router-dom';
import Login from './pages/Login/Login';
import CurrencyMaster from './pages/courrencyMaster';
import CountryStateCity from './pages/Countrystatecity';
import CountryMaster from './pages/countryMaster';
import CountrywiseCourrency from './pages/CountryWiseCurrency';
import PaginatedTable from './pages/pagination';
import { Provider } from 'react-redux';
import store from './store';
import LoveScreen from './pages/Lover';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode'; // Import the jwt-decode library
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage authentication status

  const handleLogin = () => {
    // Replace with real authentication logic
    const token = sessionStorage.getItem("authTocken");
    if (token) {
      // Verify if the token is a valid JWT format
      const isValidJWT = token.split(".").length === 3;

      if (!isValidJWT) {
        console.error("Invalid token format. Authentication failed.");
        setIsAuthenticated(false);
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

        if (decodedToken.exp < currentTime) {
          // Token is expired
          console.error("Token has expired. Authentication failed.");
          setIsAuthenticated(false);
        } else {
          // Token is valid
          sessionStorage.setItem("authTocken", token);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error decoding token:", error.message);
        setIsAuthenticated(false);
      }
    } else {
      console.error("No token found. Authentication failed.");
      setIsAuthenticated(false);
    }
  };


  useEffect(() => {
    handleLogin()
  }, [isAuthenticated])
  const headings = ['ID', 'Currency', 'Symbol', 'Actions'];

  const actions = [
    {
      icon: <FaEdit />,
      onClick: (item) => alert(`Edit clicked for ${item.currency}`),
    },
    {
      icon: <FaTrashAlt />,
      onClick: (item) => console.log('Delete clicked:', item),
    },
  ];
  const s = [
    { id: 1, currency: 'USD', symbol: '$' },
    { id: 2, currency: 'EUR', symbol: '€' },
    { id: 3, currency: 'GBP', symbol: '£' },
    { id: 1, currency: 'USD', symbol: '$' },
    { id: 2, currency: 'EUR', symbol: '€' },
    { id: 3, currency: 'GBP', symbol: '£' },
    { id: 1, currency: 'USD', symbol: '$' },
    { id: 2, currency: 'EUR', symbol: '€' },
    { id: 3, currency: 'GBP', symbol: '£' },
    // Add more rows as needed
  ];
  const data = [
    { id: 1, serial: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, serial: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, serial: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 4, serial: 4, name: 'Chris Lee', email: 'chris@example.com' },
    { id: 5, serial: 5, name: 'David Brown', email: 'david@example.com' },
    { id: 6, serial: 6, name: 'Eva White', email: 'eva@example.com' },
    { id: 7, serial: 7, name: 'Frank Harris', email: 'frank@example.com' },
  ];

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {!isAuthenticated ? (
            // Default route for unauthenticated users
            <Route path="/*" element={<Login handleLogin={handleLogin} />} />
          ) : (
            // Authenticated routes
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/Dashboard" />} />
              <Route path="/Dashboard" element={<PaginatedTable data={s} itemsPerPage={10} />} />
              <Route path="/account/Currency" element={<CurrencyMaster />} />
              <Route path="/account/Country" element={<CountrywiseCourrency />} />
              <Route path="/account/LocationMaster" element={<CountryStateCity />} />
            </Route>
          )}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar'; // Import the Navbar component
import Home from './pages/home'; // Ensure Home is correctly imported
import Dashboard from './pages/dashboard'; // Import your Dashboard component
import { Outlet } from 'react-router-dom';
import Login from './pages/Login'
import CurrencyMaster from './pages/courrencyMaster'
import CountryStateCity from './pages/Countrystatecity'
import CountryMaster from './pages/countryMaster'
import CountrywiseCourrency from './pages/CountryWiseCurrency'
import PaginatedTable from './pages/pagination'
import { Provider } from 'react-redux';
import CounterDisplay from './pages/counter';
import CounterControls from './pages/counterController'
import store from './store';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import PaginatedTabless from './Components/Tabels/PaginationTable';

const Layout = () => (
  <>
    <Navbar />

  </>
);
const data = [
  { id: 1, serial: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, serial: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, serial: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, serial: 4, name: 'Chris Lee', email: 'chris@example.com' },
  { id: 5, serial: 5, name: 'David Brown', email: 'david@example.com' },
  { id: 6, serial: 6, name: 'Eva White', email: 'eva@example.com' },
  { id: 7, serial: 7, name: 'Frank Harris', email: 'frank@example.com' },
];
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
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PaginatedTabless
              headings={headings}
              data={s}
              actions={actions}
              itemsPerPage={5} // Adjust as needed
            />} />
            <Route path="/Dashboard" element={<PaginatedTable data={data} itemsPerPage={10} />} />
            <Route path="/account/Currency" element={<CurrencyMaster />} />
            <Route path="/account/Country" element={<CountrywiseCourrency />} />
            <Route path="/account/LocationMaster" element={<CountryStateCity />} />
          </Route>
        </Routes>
      </Router>

      {/* <CounterDisplay />
      <CounterControls /> */}

    </Provider>
  );
};

export default App;

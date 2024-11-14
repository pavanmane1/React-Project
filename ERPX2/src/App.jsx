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
import PaginatedTable from './pages/pagination'
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
  { id: 8, serial: 8, name: 'Grace Green', email: 'grace@example.com' },
  { id: 9, serial: 9, name: 'Henry Scott', email: 'henry@example.com' },
  { id: 10, serial: 10, name: 'Ivy Carter', email: 'ivy@example.com' },
  { id: 11, serial: 11, name: 'Jack Hall', email: 'jack@example.com' },
  { id: 12, serial: 12, name: 'Kathy King', email: 'kathy@example.com' },
  { id: 13, serial: 13, name: 'Liam Walker', email: 'liam@example.com' },
  { id: 14, serial: 14, name: 'Mona Adams', email: 'mona@example.com' },
  { id: 15, serial: 15, name: 'Nina Thomas', email: 'nina@example.com' },
  { id: 16, serial: 16, name: 'Oliver Martinez', email: 'oliver@example.com' },
  { id: 17, serial: 17, name: 'Paul Robinson', email: 'paul@example.com' },
  { id: 18, serial: 18, name: 'Quinn Wilson', email: 'quinn@example.com' },
  { id: 19, serial: 19, name: 'Rachel Young', email: 'rachel@example.com' },
  { id: 20, serial: 20, name: 'Sam Lewis', email: 'sam@example.com' },
  { id: 21, serial: 21, name: 'Tina White', email: 'tina@example.com' },
  { id: 22, serial: 22, name: 'Ursula Harris', email: 'ursula@example.com' },
  { id: 23, serial: 23, name: 'Victor Lee', email: 'victor@example.com' },
  { id: 24, serial: 24, name: 'Wendy Clark', email: 'wendy@example.com' },
  { id: 25, serial: 25, name: 'Xander Allen', email: 'xander@example.com' },
  { id: 26, serial: 26, name: 'Yvonne Robinson', email: 'yvonne@example.com' },
  { id: 27, serial: 27, name: 'Zachary Walker', email: 'zachary@example.com' },
  { id: 28, serial: 28, name: 'Ava Scott', email: 'ava@example.com' },
  { id: 29, serial: 29, name: 'Benjamin Turner', email: 'benjamin@example.com' },
  { id: 30, serial: 30, name: 'Charlie Turner', email: 'charlie@example.com' },
  { id: 31, serial: 31, name: 'Diana Evans', email: 'diana@example.com' },
  { id: 32, serial: 32, name: 'Edward Carter', email: 'edward@example.com' },
  { id: 33, serial: 33, name: 'Fiona Lewis', email: 'fiona@example.com' },
  { id: 34, serial: 34, name: 'George King', email: 'george@example.com' },
  { id: 35, serial: 35, name: 'Hannah Green', email: 'hannah@example.com' },
  { id: 36, serial: 36, name: 'Ian Moore', email: 'ian@example.com' },
  { id: 37, serial: 37, name: 'Jackie Lewis', email: 'jackie@example.com' },
  { id: 38, serial: 38, name: 'Kevin Scott', email: 'kevin@example.com' },
  { id: 39, serial: 39, name: 'Laura Harris', email: 'laura@example.com' },
  { id: 40, serial: 40, name: 'Mike Walker', email: 'mike@example.com' },
  { id: 1, serial: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, serial: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, serial: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, serial: 4, name: 'Chris Lee', email: 'chris@example.com' },
  { id: 5, serial: 5, name: 'David Brown', email: 'david@example.com' },
  { id: 6, serial: 6, name: 'Eva White', email: 'eva@example.com' },
  { id: 7, serial: 7, name: 'Frank Harris', email: 'frank@example.com' },
  { id: 8, serial: 8, name: 'Grace Green', email: 'grace@example.com' },
  { id: 9, serial: 9, name: 'Henry Scott', email: 'henry@example.com' },
  { id: 10, serial: 10, name: 'Ivy Carter', email: 'ivy@example.com' },
  { id: 11, serial: 11, name: 'Jack Hall', email: 'jack@example.com' },
  { id: 12, serial: 12, name: 'Kathy King', email: 'kathy@example.com' },
  { id: 13, serial: 13, name: 'Liam Walker', email: 'liam@example.com' },
  { id: 14, serial: 14, name: 'Mona Adams', email: 'mona@example.com' },
  { id: 15, serial: 15, name: 'Nina Thomas', email: 'nina@example.com' },
  { id: 16, serial: 16, name: 'Oliver Martinez', email: 'oliver@example.com' },
  { id: 17, serial: 17, name: 'Paul Robinson', email: 'paul@example.com' },
  { id: 18, serial: 18, name: 'Quinn Wilson', email: 'quinn@example.com' },
  { id: 19, serial: 19, name: 'Rachel Young', email: 'rachel@example.com' },
  { id: 20, serial: 20, name: 'Sam Lewis', email: 'sam@example.com' },
  { id: 21, serial: 21, name: 'Tina White', email: 'tina@example.com' },
  { id: 22, serial: 22, name: 'Ursula Harris', email: 'ursula@example.com' },
  { id: 23, serial: 23, name: 'Victor Lee', email: 'victor@example.com' },
  { id: 24, serial: 24, name: 'Wendy Clark', email: 'wendy@example.com' },
  { id: 25, serial: 25, name: 'Xander Allen', email: 'xander@example.com' },
  { id: 26, serial: 26, name: 'Yvonne Robinson', email: 'yvonne@example.com' },
  { id: 27, serial: 27, name: 'Zachary Walker', email: 'zachary@example.com' },
  { id: 28, serial: 28, name: 'Ava Scott', email: 'ava@example.com' },
  { id: 29, serial: 29, name: 'Benjamin Turner', email: 'benjamin@example.com' },
  { id: 30, serial: 30, name: 'Charlie Turner', email: 'charlie@example.com' },
  { id: 31, serial: 31, name: 'Diana Evans', email: 'diana@example.com' },
  { id: 32, serial: 32, name: 'Edward Carter', email: 'edward@example.com' },
  { id: 33, serial: 33, name: 'Fiona Lewis', email: 'fiona@example.com' },
  { id: 34, serial: 34, name: 'George King', email: 'george@example.com' },
  { id: 35, serial: 35, name: 'Hannah Green', email: 'hannah@example.com' },
  { id: 36, serial: 36, name: 'Ian Moore', email: 'ian@example.com' },
  { id: 37, serial: 37, name: 'Jackie Lewis', email: 'jackie@example.com' },
  { id: 38, serial: 38, name: 'Kevin Scott', email: 'kevin@example.com' },
  { id: 39, serial: 39, name: 'Laura Harris', email: 'laura@example.com' },
  { id: 40, serial: 40, name: 'Mike Walker', email: 'mike@example.com' },
  { id: 1, serial: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, serial: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, serial: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 4, serial: 4, name: 'Chris Lee', email: 'chris@example.com' },
  { id: 5, serial: 5, name: 'David Brown', email: 'david@example.com' },
  { id: 6, serial: 6, name: 'Eva White', email: 'eva@example.com' },
  { id: 7, serial: 7, name: 'Frank Harris', email: 'frank@example.com' },
  { id: 8, serial: 8, name: 'Grace Green', email: 'grace@example.com' },
  { id: 9, serial: 9, name: 'Henry Scott', email: 'henry@example.com' },
  { id: 10, serial: 10, name: 'Ivy Carter', email: 'ivy@example.com' },
  { id: 11, serial: 11, name: 'Jack Hall', email: 'jack@example.com' },
  { id: 12, serial: 12, name: 'Kathy King', email: 'kathy@example.com' },
  { id: 13, serial: 13, name: 'Liam Walker', email: 'liam@example.com' },
  { id: 14, serial: 14, name: 'Mona Adams', email: 'mona@example.com' },
  { id: 15, serial: 15, name: 'Nina Thomas', email: 'nina@example.com' },
  { id: 16, serial: 16, name: 'Oliver Martinez', email: 'oliver@example.com' },
  { id: 17, serial: 17, name: 'Paul Robinson', email: 'paul@example.com' },
  { id: 18, serial: 18, name: 'Quinn Wilson', email: 'quinn@example.com' },
  { id: 19, serial: 19, name: 'Rachel Young', email: 'rachel@example.com' },
  { id: 20, serial: 20, name: 'Sam Lewis', email: 'sam@example.com' },
  { id: 21, serial: 21, name: 'Tina White', email: 'tina@example.com' },
  { id: 22, serial: 22, name: 'Ursula Harris', email: 'ursula@example.com' },
  { id: 23, serial: 23, name: 'Victor Lee', email: 'victor@example.com' },
  { id: 24, serial: 24, name: 'Wendy Clark', email: 'wendy@example.com' },
  { id: 25, serial: 25, name: 'Xander Allen', email: 'xander@example.com' },
  { id: 26, serial: 26, name: 'Yvonne Robinson', email: 'yvonne@example.com' },
  { id: 27, serial: 27, name: 'Zachary Walker', email: 'zachary@example.com' },
  { id: 28, serial: 28, name: 'Ava Scott', email: 'ava@example.com' },
  { id: 29, serial: 29, name: 'Benjamin Turner', email: 'benjamin@example.com' },
  { id: 30, serial: 30, name: 'Charlie Turner', email: 'charlie@example.com' },
  { id: 31, serial: 31, name: 'Diana Evans', email: 'diana@example.com' },
  { id: 32, serial: 32, name: 'Edward Carter', email: 'edward@example.com' },
  { id: 33, serial: 33, name: 'Fiona Lewis', email: 'fiona@example.com' },
  { id: 34, serial: 34, name: 'George King', email: 'george@example.com' },
  { id: 35, serial: 35, name: 'Hannah Green', email: 'hannah@example.com' },
  { id: 36, serial: 36, name: 'Ian Moore', email: 'ian@example.com' },
  { id: 37, serial: 37, name: 'Jackie Lewis', email: 'jackie@example.com' },
  { id: 38, serial: 38, name: 'Kevin Scott', email: 'kevin@example.com' },
  { id: 39, serial: 39, name: 'Laura Harris', email: 'laura@example.com' },
  { id: 40, serial: 40, name: 'Mike Walker', email: 'mike@example.com' }
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<PaginatedTable data={data} itemsPerPage={10} />} />
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

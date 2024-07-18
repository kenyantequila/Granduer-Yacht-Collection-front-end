import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import HomePage from './components/HomePage';
import AdminLoginForm from './components/AdminLoginForm';
import AdminDashboard from './components/AdminDashboard';
import YachtDetails from './components/YachtDetails';
import YachtBookings from './components/YachtBookings'; // Corrected import

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/admin-login" element={<AdminLoginForm />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/yacht/:id" element={<YachtDetails />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/admin/yachts/:yachtId/bookings" element={<YachtBookings />} /> {/* Updated path and param */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

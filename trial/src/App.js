import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import HomePage from './components/HomePage';
import YachtDetailsPage from './components/YachtDetailsPage';
import BookingForm from './components/BookingForm';
import BookingManagementPage from './components/BookingManagementPage';
import YachtCard from './components/YachtCard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/" element={<Navigate to="/homePage" />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path='yachtcard' element={<YachtCard/>}/>
          <Route path="/yacht/:id" element={<YachtDetailsPage />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/manage-bookings" element={<BookingManagementPage />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

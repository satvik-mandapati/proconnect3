// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import AdminDashboard from './components/AdminDashboard';
import ProfessionalDashboard from './components/ProfessionalDashboard';
import UserDashboard from './components/UserDashboard';
import CustomerSupport from './components/CustomerSupport';
import LoginPage from './components/LoginPage';

function App() {
  const [auth, setAuth] = useState({ isLoggedIn: false, role: '' });

  const handleLogin = (role) => {
    setAuth({ isLoggedIn: true, role });
  };

  const handleLogout = () => {
    setAuth({ isLoggedIn: false, role: '' });
  };

  return (
    <Router>
      <Container>
        <Header auth={auth} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/professional" element={<ProfessionalDashboard />} />
          <Route path="/support" element={<CustomerSupport />} />
          <Route path="/" element={<UserDashboard />} /> {/* Default to User Dashboard */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

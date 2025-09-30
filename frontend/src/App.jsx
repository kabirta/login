import React from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export const serverUrl = "https://login-3u4z833u0-mintajul-mondals-projects.vercel.app";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

export default App;

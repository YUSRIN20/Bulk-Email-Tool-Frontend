import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import DefaultPage from './Components/DefaultPage';
import WelcomePage from './Components/WelcomePage';
import Dailylist from './Components/Dailylist';
import MonthlyList from './Components/MonthlyList';
import './App.css'
const App = () => {
  const [email, setEmail] = useState(localStorage.getItem('email') || '')
  const [username, setUserName] = useState(localStorage.getItem('username') || '')
  const [loading, setLoading] = useState(true);// New state for loading

  useEffect(() => {
    // Simulating loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    localStorage.setItem('email', email)
    localStorage.setItem('username', username)
  }, [email, username])

  return (
    <div>
      {loading ? (
        // Show loader while loading
        <div className='loader'>
          <div class="spinner-border text-warning" style={{ width: "3rem", height: "3rem" }} role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        // Once loading is complete, render the application content
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DefaultPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage setEmail={setEmail} setUserName={setUserName} />} />
            <Route path='/forgot' element={<ForgotPassword />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            <Route path='/welcome' element={<WelcomePage email={email} username={username} />} />
            <Route path='/home/:email' element={<><Navbar email={email} /><HomePage email={email} /></>} />
            <Route path='/dashboard/:email' element={<><Navbar email={email} /><Dashboard /></>} >
              <Route path='dailylist' element={<Dailylist email={email} username={username} />} />
              <Route path='monthlylist' element={<MonthlyList email={email} username={username} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
      <ToastContainer />
    </div>

  );
};

export default App;

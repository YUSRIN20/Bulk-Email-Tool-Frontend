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

const App = () => {
  const [email,setEmail] = useState(localStorage.getItem('email') || '')
  const [username,setUserName] = useState(localStorage.getItem('username') || '')
  console.log("=>",email);

  useEffect(()=>{
    localStorage.setItem('email',email)
    localStorage.setItem('username',username)
  },[email,username])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultPage />}/>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage email={email} setEmail={setEmail} setUserName={setUserName} />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/resetpassword' element={<ResetPassword />}/>
          <Route path='/welcome' element={<WelcomePage email={email} username={username}/>}/>
          <Route path='/home/:email' element={<><Navbar  email={email}  setEmail={setEmail} /><HomePage email={email}  /></>} />
          <Route path ='/dashboard' element={<><Navbar  /><Dashboard /></>} >
            <Route path='dailylist' element={<Dailylist />} />
            <Route path='monthlylist' element={<MonthlyList />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>

  );
};

export default App;
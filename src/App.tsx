import { useState } from 'react'
import './App.css'
import Signin from './components/users/signin/Signin'
import Signup from './components/users/signup/Signup'
import { Routes, Route } from "react-router-dom";
import NoMatch from './NoMatch';
import Verify from './components/users/verify/Verify';
import Forgot from './components/users/resetPassword/ForgotPass';
import SendOtpReset from './components/users/resetPassword/SendOtpReset';
import ResetPassword from './components/users/resetPassword/ResetPassword';
import ResendOtp from './components/users/resendOtp/ResendOtp';

function App() {

  return (
    <div className="App">
         <Routes>
            <Route path="/" element={<Signup/>} />
            <Route path="/signin"element={<Signin/>} />
            <Route path="/verify_user"element={<Verify/>} />
            <Route path="/forgot-pass"element={<Forgot/>} />
            <Route path="/send-otp"element={<SendOtpReset/>} />
            <Route path="/reset-pass"element={<ResetPassword/>} />
            <Route path="/resend-otp"element={<ResendOtp/>} />
            <Route path="*" element={<NoMatch/>} />
          </Routes>
    </div>
  )
}

export default App

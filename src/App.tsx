import { useState } from 'react'
import './App.css'
import Signin from './components/users/signin/Signin'
import Signup from './components/users/signup/Signup'
import { Routes, Route } from "react-router-dom";
import NoMatch from './NoMatch';
import Verify from './components/users/verify/Verify';

function App() {

  return (
    <div className="App">
         <Routes>
            <Route path="/" element={<Signup/>} />
            <Route path="/signin"element={<Signin/>} />
            <Route path="/verify_user"element={<Verify/>} />
            <Route path="*" element={<NoMatch/>} />
          </Routes>
    </div>
  )
}

export default App

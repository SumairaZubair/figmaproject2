// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/Signup/SignUp';
import GetStart from './components/landingPage/GetStart';

function App() {
  return (
    <div className="App">
      
      {/* <GetStart/> */}
     
      <Router>
      <Routes>
        <Route path="/" element={<GetStart />} exact/>
        <Route path="/signUp" element={<SignUp />} exact/>
        <Route path="/login" element={<Login />} exact/>

        
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;

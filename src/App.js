// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './components/Signup/SignUp';
import GetStart from './components/landingPage/GetStart';

function App() {
  return (
    <Router>
    <div className="App">
      
      <GetStart/>
     
      <Routes>
        <Route path="/signUp" element={<SignUp />} exact/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;

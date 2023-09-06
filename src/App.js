
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './authentication/login/Login';
import SignUp from './authentication/Signup/SignUp';
import Verified from './authentication/verification/Verified';
import ForgetPassword from './authentication/forgetPassword/ForgetPassword';
import ProducerAccount from './components/producerProfile/ProducerAccount';
import ProducerForm from './components/producerProfile/ProducerForm'
import Slider from './commonComp/landingPages/Slider';
function App() {
  return (
    <div className="App">
   
     
      <Router>
      <Routes>

         <Route path="/" element={<Slider/>} exact/>
        <Route path="/signUp" element={<SignUp />} exact/>
        <Route path="/login" element={<Login />} exact/>
        <Route path="/verify" element={<Verified/>}exact/>
        <Route path="/forget" element={<ForgetPassword/>}exact/>
        <Route path="/proAcc" element={<ProducerAccount/>}exact/>
        <Route path="/proForm" element={<ProducerForm/>}exact/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

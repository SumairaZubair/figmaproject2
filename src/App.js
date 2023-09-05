
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/Signup/SignUp';
import Verified from './components/Signup/Verified';
// import Slider from './components/landingPage/Slider';
import ForegtPassword from './components/login/ForgetPassword';
import ProducerAccount from './components/producerProfile/ProducerAccount';
import ProducerForm from './components/producerProfile/ProducerForm'
// import Data from '../src/commonComp/Data'

import Slider from './commonComp/landingPages/Slider';
// import HomePage1 from './commonComp/landingPages/HomePage1';
function App() {
  return (
    <div className="App">
     {/* <HomePage1/> */}
     {/* <Slider/> */}
      {/* <GetStart/> */}
     
      <Router>
      <Routes>
        {/* <Route path="/" element={<Data/>} exact/>  */}

         <Route path="/" element={<Slider/>} exact/>
        <Route path="/signUp" element={<SignUp />} exact/>
        <Route path="/login" element={<Login />} exact/>
        <Route path="/verify" element={<Verified/>}exact/>
        <Route path="/forget" element={<ForegtPassword/>}exact/>
        <Route path="/proAcc" element={<ProducerAccount/>}exact/>
        <Route path="/proForm" element={<ProducerForm/>}exact/>



        
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;

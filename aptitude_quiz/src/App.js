import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Logical_reasoning from './components/Logical_reasoning';
import VerbalAbility from './components/VerbalAbility';
import NonVerbalReasoning from './components/NonVerbalReasoning';
import ArithmeticAptitude from './components/ArithmeticAptitude';
import Exam from './components/Exam';
import AboutUS from './components/AboutUS';
import ContactUs from './components/ContactUs';
import Register from './components/Register';
import Login from './components/Login';
import LogOut from './components/LogOut';
import History from './components/History';

function App() {
  const [login, setLogin] = useState(false);
  const changeLogin = (b) => {
      setLogin(b);
  }
  return (
    <div id="app-container" className="app">
      <Sidebar />
      <div className="vertical-line"></div>
      <div className="main-content">
        <Header  prop = {login}/>
        { login &&
        <Routes>
          <Route path="/LogOut" element={<LogOut prop = {changeLogin}/>} />
          <Route path="/Logical_reasoning" element={<Logical_reasoning prop={login}/>} />
          <Route path="/VerbalAbility" element={<VerbalAbility prop={login}/>} />
          <Route path="/NonVerbalReasoning" element={<NonVerbalReasoning prop={login} />} />
          <Route path="/ArithmeticAptitude" element={<ArithmeticAptitude prop={login}/>} />
          <Route path="/AboutUS" element={<AboutUS prop={login}/>} />
          <Route path="/ContactUs" element={<ContactUs prop={login}/>} />
          <Route path="/Exam/:num" element={<Exam prop={login} />} />
          <Route path="/History" element={<History prop={login} />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        }
        {
          !login && 
          <Routes>
          <Route path="/Register" element={<Register prop={changeLogin}/>} />
          <Route path="/*" element={<Login prop={changeLogin} />} />
          </Routes>
        }
      </div>
    </div>
  );
}

export default App;

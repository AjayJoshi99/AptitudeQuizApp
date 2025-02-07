import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const [darkMode, setDarkMode] = useState(true);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true); 
  const x = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const appContainer = document.getElementById('app-container');
    appContainer.classList.toggle('dark-mode', darkMode);
  };

  // Function to toggle navbar collapse status
  const toggleNavbar = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };

  return (
    <div className="main-content">
      <nav className={`navbar navbar-expand-lg rounded ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
        <div className="container-fluid">
          <span className="navbar-brand h1">Aptitude Mania</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={!navbarCollapsed ? "true" : "false"} aria-label="Toggle navigation" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${navbarCollapsed ? 'show' : ''}`} id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <button className="btn" type="button" onClick={toggleDarkMode}>
                <img src="mode_icon.png" style={{ width: '40px' }} alt="Mode Icon" />
              </button>
              {props.prop &&
                <button className="btn m-2 side_button1 h" onClick={() => x('LogOut')} type="button">Log Out</button>}
              {!props.prop &&
                <button className="btn m-2 side_button1 h" onClick={() => x('Login')} type="button">Login</button>
              }
              <button className="btn m-2 side_button1 h" onClick={() => x('AboutUS')} type="button">About Us</button>
              <button className="btn m-2 side_button1 h" onClick={() => x('ContactUs')} type="button">Contact Us</button>
              <div>
              <button className="btn m-2 side_button1 h homebtn" onClick={() => x('Home')} type="button">Home</button>
              </div>
              <div className="dropdown hidden">
                <button className="btn m-2 side_button1 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Quizes
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <button className="dropdown-item" onClick={() => x('ArithmeticAptitude')} type="button">ArithmeticAptitude</button>
                  <button className="dropdown-item" onClick={() => x('Logical_reasoning')} type="button">Logical_reasoning</button>
                  <button className="dropdown-item" onClick={() => x('NonVerbalReasoning')} type="button">NonVerbalReasoning</button>
                  <button className="dropdown-item" onClick={() => x('VerbalAbility')} type="button">VerbalAbility</button>
                  <button className="dropdown-item" onClick={() => x('History')} type="button">History</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

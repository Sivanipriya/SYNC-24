import React from 'react';
import cseaBlack from "../../assets/csea_black.png";
import sync from "../../assets/sync.png";
import "./Header.css"
const Header = () => {
  return (
    <header id="header" className="navContainer fixed-top d-flex align-items-center header-scrolled">
      <div className="navContainer container d-flex align-items-center justify-content-between">
        {/* Logo Name */}
        <div className="logo-name">
          <a href="../">
            <img
              src={cseaBlack}
              alt="CSEA"
              className="img-fluid"
              height="50"
              style={{ padding: '5px' }}
              width="60"
            />
          </a>
        </div>

        <div style={{ display: 'flex' }}>
          {/* Image Logo */}
          <div className="logo" style={{ padding: '5px' }}>
            <a href="./">
              <img
                src={sync}
                alt="Sync Logo"
                className="img-fluid"
                height="50"
                width="50"
              />
            </a>
          </div>
          
          {/* Sync Name */}
          <div className="logo-name" style={{ margin: '10px' }}>
            <h1>
              <a href="#"><b>SYNC</b></a>
            </h1>
          </div>
        </div>

        {/* Navbar */}
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero"><b>Home</b></a></li>
            <li><a className="nav-link scrollto" href="#about"><b>About</b></a></li>
            <li><a className="nav-link scrollto" href="#services"><b>Events</b></a></li>
            <li><a className="nav-link scrollto" href="#contact"><b>Contact</b></a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;

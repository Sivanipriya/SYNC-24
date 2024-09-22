import React, { useState, useEffect } from 'react';
import cseaBlack from "../../assets/csea_black.png";
import sync from "../../assets/sync.png";
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'events', 'contact'];
      let currentSection = '';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();

        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          currentSection = section;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header id="header" className="navContainer fixed-top d-flex align-items-center">
      <div className="navContainer container d-flex align-items-center justify-content-between">
        <div className="logo-name">
          <a href="../">
            <img src={cseaBlack} alt="CSEA" className="img-fluid" height="50" width="60" />
          </a>
        </div>

        <div style={{ display: 'flex' }}>
          <div className="logo" style={{ padding: '5px' }}>
            <a href="./">
              <img src={sync} alt="Sync Logo" className="img-fluid" height="50" width="50" />
            </a>
          </div>
          <div className="logo-name" style={{ margin: '10px' }}>
            <h1><a href="#"><b>SYNC</b></a></h1>
          </div>
        </div>


        <nav id="navbar" className={`navbar ${mobileNavOpen ? 'navbar-mobile-open' : ''}`}>
          <ul>
            <li>
              <a className={`nav-link scrollto ${activeSection === 'hero' ? 'active' : ''}`} href="#hero"><b>Home</b></a>
            </li>
            <li>
              <a className={`nav-link scrollto ${activeSection === 'about' ? 'active' : ''}`} href="#about"><b>About</b></a>
            </li>
            <li>
              <a className={`nav-link scrollto ${activeSection === 'events' ? 'active' : ''}`} href="#events"><b>Events</b></a>
            </li>
            <li>
              <a className={`nav-link scrollto ${activeSection === 'contact' ? 'active' : ''}`} href="#contact"><b>Contact</b></a>
            </li>
          </ul>
        </nav>

        {mobileNavOpen && (
          <div className="navbar-mobile">
            <ul>
              <li><a className="nav-link scrollto" href="#hero" onClick={toggleMobileNav}><b>Home</b></a></li>
              <li><a className="nav-link scrollto" href="#about" onClick={toggleMobileNav}><b>About</b></a></li>
              <li><a className="nav-link scrollto" href="#events" onClick={toggleMobileNav}><b>Events</b></a></li>
              <li><a className="nav-link scrollto" href="#contact" onClick={toggleMobileNav}><b>Contact</b></a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

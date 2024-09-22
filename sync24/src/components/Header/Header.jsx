import React, { useState, useEffect } from 'react';
import cseaBlack from "../../assets/csea_black.png";
import sync from "../../assets/sync.png";
import "./Header.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll detection to ensure only one section is highlighted
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'events', 'contact'];
      let currentSection = 'hero'; // Default section

      sections.forEach((section) => {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();

        // Checking if the section is roughly in the center of the viewport
        if (rect.top >= window.innerHeight * 0.25 && rect.bottom <= window.innerHeight * 0.75) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className="navContainer fixed-top d-flex align-items-center header-scrolled">
      <div className="navContainer container d-flex align-items-center justify-content-between">
        {/* Logo Name */}
        <div className="logo-name">
          <a href="https://cseaceg.org.in/">
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
        <nav id="navbar" className={`navbar ${isMenuOpen ? 'navbar-open' : ''}`}>
          <ul className={isMenuOpen ? 'show' : ''}>
            <li>
              <a className={`nav-link scrollto ${activeSection === 'hero' ? 'active' : ''}`} href="#hero" onClick={closeMenu}>
                <b>Home</b>
              </a>
            </li>
            <li>
              <a className={`nav-link scrollto ${activeSection === 'about' ? 'active' : ''}`} href="#about" onClick={closeMenu}>
                <b>About</b>
              </a>
            </li>
            <li>
              <a className={`nav-link scrollto ${activeSection === 'events' ? 'active' : ''}`} href="#events" onClick={closeMenu}>
                <b>Events</b>
              </a>
            </li>
            <li>
              <a className={`nav-link scrollto ${activeSection === 'contact' ? 'active' : ''}`} href="#contact" onClick={closeMenu}>
                <b>Contact</b>
              </a>
            </li>
          </ul>
          {/* Hamburger Menu Icon */}
          <i className="bi bi-list mobile-nav-toggle" onClick={toggleMenu}></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// src/components/Contact.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="section-title">
      <h2>CONTACT US</h2>
      <div className="social-links">
       
          <a
            href="https://www.facebook.com/csea.ceg"
            target="_blank"
            rel="noopener noreferrer" className="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/csea_ceg/"
            target="_blank"
            rel="noopener noreferrer" className="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        
          <a
            href="https://www.linkedin.com/company/csea-ceg/"
            target="_blank"
            rel="noopener noreferrer" className="linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        
      </div>
      <div className="position">
        <div className="individual item1">
          <p className="male_chair">Sunil Kumar</p>
          <a href="mailto:chairman@abacus.org.in">chairman@abacus.org.in</a>
        </div>
        <div className="individual item2">
          <p className="female_chair">Smrithi Prakash</p>
          <a href="mailto:chairman@abacus.org.in">chairman@abacus.org.in</a>
        </div>
        <div className="individual item3">
          <p className="male_vicechair">Padmasharan B</p>
          <a href="mailto:vicechairman@abacus.org.in">
            vicechairman@abacus.org.in
          </a>
        </div>
        <div className="individual item4">
          <p className="female_vicechar">Varsha B</p>
          <a href="mailto:vicechairman@abacus.org.in">
            vicechairman@abacus.org.in
          </a>
        </div>
        <div className="individual item5">
          <p className="generalsec">Nikhil Prasanna</p>
          <a href="mailto:generalsecretary@abacus.org.in">
            generalsecretary@abacus.org.in
          </a>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.375266247932!2d80.2335263!3d13.0117582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f6aaaaaab%3A0x90dc1b9c54311d4b!2sDepartment%20Of%20Computer%20Science%20and%20Engineering!5e0!3m2!1sen!2sin!4v1726378568939!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

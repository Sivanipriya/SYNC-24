import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin, 
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="section-title">
      <h2>CONTACT US</h2>
      <div className="social-links">
        <a
          href="https://www.facebook.com/csea.ceg"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          href="https://www.instagram.com/csea_ceg/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a
          href="https://www.linkedin.com/company/csea-ceg/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </div>
      <div className="position">
        <div className="individual item1">
          <p className="male_chair">
            <a href="https://www.linkedin.com/in/sunilsk17/" target="_blank" rel="noopener noreferrer">
              Sunil Kumar
            </a>
          </p>
          <a href="mailto:chairman@abacus.org.in">chairman@abacus.org.in</a>
        </div>
        <div className="individual item2">
          <p className="female_chair">
            <a href="https://www.linkedin.com/in/smrithi-prakash-b2962a282" target="_blank" rel="noopener noreferrer">
              Smrithi Prakash
            </a>
          </p>
          <a href="mailto:chairman@abacus.org.in">chairman@abacus.org.in</a>
        </div>
        <div className="individual item3">
          <p className="male_vicechair">
            <a href="https://www.linkedin.com/in/padmasharan-b-9b117122a/" target="_blank" rel="noopener noreferrer">
              Padmasharan B
            </a>
          </p>
          <a href="mailto:vicechairman@abacus.org.in">
            vicechairman@abacus.org.in
          </a>
        </div>
        <div className="individual item4">
          <p className="female_vicechar">
            <a href="https://www.linkedin.com/in/varshacse/" target="_blank" rel="noopener noreferrer">
              Varsha B
            </a>
          </p>
          <a href="mailto:vicechairman@abacus.org.in">
            vicechairman@abacus.org.in
          </a>
        </div>
        <div className="individual item5">
          <p className="generalsec">
            <a href="https://www.linkedin.com/in/nikhil03a/" target="_blank" rel="noopener noreferrer">
              Nikhil Prasanna
            </a>
          </p>
          <a href="mailto:generalsecretary@abacus.org.in">
            generalsecretary@abacus.org.in
          </a>
        </div>
      </div>
      <div className="footer">
        <div className="loc">
          <a href="https://www.google.com/maps/place/Department+Of+Computer+Science+and+Engineering/@13.0117582,80.2335263,17z/data=!4m7!3m6!1s0x3a52679f6aaaaaab:0x90dc1b9c54311d4b!8m2!3d13.0125764!4d80.2359838!15sChRkY3NlIGFubmEgdW5pdmVyc2l0eZIBFXVuaXZlcnNpdHlfZGVwYXJ0bWVudOABAA!16s%2Fg%2F11b7jfdnj0?shorturl=1">
        <FontAwesomeIcon icon={faMapMarkerAlt} size="2xl" /></a>
        </div>
        <div className="location">
          <p>CSEA</p>
          <p>CEG,Anna University</p>
          <p>Chennai.</p>
        </div>
        </div>
      
    </div>
  );
};

export default Contact;

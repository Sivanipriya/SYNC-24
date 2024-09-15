// src/components/About.jsx
import React from 'react';
import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faMedal } from '@fortawesome/free-solid-svg-icons';
import aboutImage from '../assets/about.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1 className="about-title">ABOUT</h1>
            </div>
            <div className="about-content">
                <div className="about-text">
                    <p>Sync is an intra-college symposium hosted by the Department of Computer Science. It is conducted with the notion of aggrandizing the intellect and kindling the passion for computer science in budding engineers. Sync promotes inter-department collaboration and interdisciplinary activities. Apart from technical events, it focuses on other nontechnical events to maintain the perfect equilibrium between tech and non-tech events.</p>
                </div>
                <div className="about-text">
                    <p>This year, we have decided to have the events around Digital Well-being. Sync ‘23 is about to blossom afresh on 17th and 18th of October, 2023. Encompassing multifarious events, this version has the benchmark features to enthrall the multitude, albeit in a sustainable manner. Every experience brings a greater clarity of vision and thus with the past experiences, Sync ‘23 is all set to reach further horizons.</p>
                </div>
            </div>
            <div className="about-extra">
                <img src={aboutImage} alt="About" className="about-image" />
                <div className="extra-items">
                    <div className="extra-item">
                        <div className="icon-heading-container">
                            <FontAwesomeIcon icon={faCalendarDay} className="extra-icon" />
                            <h3>13+ Events</h3>
                        </div>
                        <p className='bold'>Experience..Expertise..Everytime</p>
                        <p>Come and participate in the exceptional tech and non-tech events organized just for you</p>
                    </div>
                    <div className="extra-item">
                        <div className="icon-heading-container">
                            <FontAwesomeIcon icon={faMedal} className="extra-icon" />
                            <h3>
                                ₹20,000+
                                <span className="heading-line">Worth Cash</span>
                                <span className="heading-line">Prizes</span>
                            </h3>
                        </div>
                        <p className='bold'>An award recognizing your talent is an honour</p>
                        <p>Get a hold of exciting gifts for participation</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Header;

// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';

function App() {
    return (
        <div>
            <Header />
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="events"><Events /></div>
            <div id="contact"><Contact /></div>
        </div>
    );
}

export default App;

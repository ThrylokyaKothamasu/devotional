// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import flute from '../Images/flute.avif';

function Navbar() {
    return (
        <div className="top-container">
            <div className="header">
                <img src={flute} alt="logo" className="logo" />
                <h2 className="title">Spiritual Stories</h2>
            </div>
            <div className="options">
                <Link to="/" className='button-81'>Home</Link>
                <Link to="/Read" className='button-81'>Explore</Link>
                <Link to="/Myths" className='button-81'>Myths</Link>
                <Link to="/About" className='button-81'>About us</Link>
                <Link to="/Signin" className='button-81'>Login</Link>
            </div>
        </div>
    );
}

export default Navbar;
// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


function Navbar() {
    return (
        <div className="top-container">
            <div className="header">
                <img src="Images/flute.jpg" alt="logo" className="logo" />
                <h2 className="title">Spiritual Stories</h2>
            </div>
            <div className="options">
                <Link to="/" className='subtitle'>Home</Link>
                <Link to="/desavataras" className='subtitle'>Desavataras</Link>
                <Link to="/Read" className='subtitle'>Explore</Link>
                <Link to="/Myths" className='subtitle'>Myths</Link>
                <Link to="/About" className='subtitle'>About us</Link>
                {/* <Link to="/Signin" className='subtitle'>Login</Link> */}
            </div>
        </div>
    );
}

export default Navbar;
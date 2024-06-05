import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">

            <h1 className="title1">Spiritual Stories</h1>

            <div className='about'>
                Embark on a journey through the timeless tales of the Ramayana, Mahabharata, and Bhagavad Gita. Uncover profound ancient stories, teachings, and principles of Dharma. Join us on a transformative <p style={{paddingLeft:'50px'}}>journey of wisdom and inspiration.</p>
            </div>
            <div className='navigate'>
                <Link to="/" className='links'>Home<p className='link1'>|</p></Link>
                <Link to="/Read" className='links'>Explore<p className='link1'>|</p></Link>
                <Link to="/Myths" className='links'>Myths<p className='link1'>|</p></Link>
                <Link to="/About" className='links'>About us<p className='link1'>|</p></Link>
                <Link to="/Signin" className='links'>Login</Link>
            </div>
            <div className='contact'>
                Contact us :  +91 9206381544
            </div>
            <div className='copyright'>
                &copy; <p className='cp'>copyright</p> ,All rights Reserved
            </div>
        </div>
    )
}
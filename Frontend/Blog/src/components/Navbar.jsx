import '../index.css'
import logo from '../assets/logo.svg'

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    
    const handleNavClick = () => {
        const navBtn = document.querySelector('#nav-btn')
        const navBar = document.querySelector('#primary-navigation')
        const visible = navBar.getAttribute('data-visible')

        if (visible === 'false') {
            navBar.setAttribute('data-visible', 'true')
            navBtn.setAttribute('aria-expanded', 'true')
            navBtn.style.position = 'fixed'
        } else {
            navBar.setAttribute('data-visible', 'false')
            navBtn.setAttribute('aria-expanded', 'false')
            navBtn.style.position = 'absolute'
        }
    }

    return (
        <>
            <header className='primary-header flex'>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Warikoo" />
                    </Link>
                </div>

                <button className='nav-btn' id='nav-btn' onClick={handleNavClick} aria-controls='primary-navigation' aria-expanded="false">
                            <span className='sr-only'>Menu</span>
                </button>

                <nav>
                    <ul className="primary-navigation flex" id="primary-navigation" data-visible="false">
                        <li>
                            <Link to="/blogs">Blog</Link>
                        </li>
                        <li>
                            <Link to="/podcast">Podcast</Link>
                        </li>

                        <li>
                            <Link to="/about">About Me</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar

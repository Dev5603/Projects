import React from 'react'
import { Link } from 'react-router-dom'

import '../index.css'
import logo from '../assets/logo.svg'

function Footer() {
    return (
        <>
            <header className='footer-header flex'>
                <div className='footer__logo'>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <nav>

                    <ul className='footer__navigation'>

                        <li>
                            <Link to="/blogs">Blog</Link>
                        </li>
                        <li>
                            <Link to="/podcast">Podcast</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
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

export default Footer

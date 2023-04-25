import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './styles/pages.css'

function contact() {
    return (
        <>
            <Navbar />
            <div className='contact-main'>
                <div className='contact'>
                    <h2>Contact Me</h2>
                    <p>Suggestions? Or feedback? Hit me up!</p>
                </div>
                <div className='email'>
                    <h4>Email</h4>
                    <p className='email__personal'><span>Personal:</span> dev rajesh 56003 at gmail dot com</p>
                    <p className='email__business'> <span>Business:</span> dev nadar 5603 at gmail dot com</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default contact

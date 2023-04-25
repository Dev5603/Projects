import React from 'react'
import './styles/pages.css'
import apple from '../assets/apple.svg'
import google from '../assets/google.svg'
import spotify from '../assets/spotify.svg'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Podcast() {
    return (
        <>
            <Navbar />
            <div className='podcast'>
                <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/show/6ZcvVBPQ2ToLXEWVbaw59P?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <p className='subscribe'>Subscribe and Listen on Major Platforms</p>
            <div className='platforms'>
                <div className='podcasts'>
                    <a href="https://podcasts.apple.com/in/podcast/woice-with-warikoo-podcast/id1557410303"><img style={{width: "2.75rem"}} src={apple} alt="Apple Podcast Logo" /></a>
                    <p>Apple Podcasts</p>
                </div>
                <div className='podcasts'>
                    <a href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cub21ueWNvbnRlbnQuY29tL2QvcGxheWxpc3QvNGJiMzM3MDQtNjE1Yi00MDU0LWFhZTktYWNlNTAwZmQ0MTk3L2M2ZTE4YmIxLTY1MGMtNDNiZi1hODUyLWFjZTYwMDQ4MjQxOS85YmFjMWQ2ZC0zZjNhLTQyOGEtYjhkMS1hY2U2MDA0OTFiMmIvcG9kY2FzdC5yc3M="><img style={{width: "2.75rem"}} src={google} alt="Apple Podcast Logo" /></a>
                    <p>Google Podcasts</p>
                </div>
                <div className='podcasts'>
                    <a href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cub21ueWNvbnRlbnQuY29tL2QvcGxheWxpc3QvNGJiMzM3MDQtNjE1Yi00MDU0LWFhZTktYWNlNTAwZmQ0MTk3L2M2ZTE4YmIxLTY1MGMtNDNiZi1hODUyLWFjZTYwMDQ4MjQxOS85YmFjMWQ2ZC0zZjNhLTQyOGEtYjhkMS1hY2U2MDA0OTFiMmIvcG9kY2FzdC5yc3M="><img style={{width: "2.75rem"}} src={spotify} alt="Spotify Podcast Logo" /></a>
                    <p>Spotify Podcasts</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Podcast

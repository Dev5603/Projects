import Navbar from '../components/Navbar'
import Books from '../components/Books'
import Blogs from '../components/Blogs'

import React from 'react'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Navbar />
        <Books />
        <Blogs /> 
        <Footer />
    </>
  )
}

export default Home

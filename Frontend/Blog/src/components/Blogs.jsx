import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ApiContext from '../context/api/apiContext'
import '../index.css'

function Blogs() {
    const blogs = useContext(ApiContext)

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 880 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 880, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

        return (
            <>
                <div className='blog-main'>
                    <div>
                        <h2>Read my blog</h2>
                        <p>Read the latest articles from ankur warikoo.</p>
                    </div>
                    <div className="blog-container">
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000} transitionDuration={5000} rewindWithAnimation={true}>
                            {blogs.reverse().slice(-6).map((blog) => (
                                    <div className='blog' key={blog.id}>
                                        <Link to={`/blogs/${blog.id}`}>
                                            <h5 className='blog__title'>{blog.title}</h5>
                                        </Link>
                                        <p className='blog__date'><small>{blog.date}</small></p>
                                        <p className='blog__content'>{blog.content}</p>
                                    </div>
                            ))}
                        </Carousel>
                    </div>
                    <Link className='blog__btn' to="/blogs">Read all</Link>
                </div>
            </>
        )
}

export default Blogs

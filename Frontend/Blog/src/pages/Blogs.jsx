import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './styles/pages.css'
import Navbar from "../components/Navbar";
import ApiContext from "../context/api/apiContext";
import Footer from "../components/Footer";

function Blogs() {
    const blogs = useContext(ApiContext)
    const [search, setSearch] = useState('')

    return (
        <>
            <Navbar />
            <div>
                <div className="input">
                    <input type="search" onChange={(e) => setSearch(e.target.value)} className="input__search" name="blog-name" id="blog-name" placeholder="Search for a blog" />
                </div>

                <div className="blogs-container">
                    {blogs.filter(blog => {
                        return search.toLowerCase() === ''
                        ? blog
                        : blog.title.toLowerCase().includes(search)
                    }).reverse().map((blog) => (
                        <div className='blogs' key={blog.id}>
                            <Link to={`/blogs/${blog.id}`}>
                                <h5 className='blogs__title'>{blog.title}</h5>
                            </Link>
                            <p className='blogs__date'><small>{blog.date} | Entrepreneurship</small></p>
                            <p className='blogs__content'>{blog.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blogs

import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './styles/pages.css'

function Blog() {
    let { id } = useParams()
    const [blog, setBlog] = useState([])
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState(null)
    const [name, setName] = useState(null)

    useEffect(() => {
        fetchAPI()
        fetchComments()
    }, [])

    const fetchAPI = async () => {
        const response = await fetch(`http://127.0.0.1:8000/blogs/${id}`)
        const results = await response.json()
        setBlog(results)
    }

    const fetchComments = async () => {
        const response = await fetch(`http://127.0.0.1:8000/comments/${id}`)
        const results = await response.json()
        setComments(results.comments)
    }

    const handleClick = () => {
        const commentForm = document.querySelector('#comment')
        const nameForm = document.querySelector('#name')

        fetch(`http://127.0.0.1:8000/comments/${id}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, comment})
        })
        .then(() => {
            commentForm.value = ''
            nameForm.value = ''
                
            setComment(null)
            setName(null)
        })
    }

    useEffect(() => {
        fetchComments()
    }, [comment])

    return (
        <>
            <Navbar />
            <div className='single-blog-container'>
                <h5 className='single-blog__title'>{blog.title}</h5>
                <p className='single-blog__date'><small>{blog.date} | Entrepreneurship</small></p>
                <p className='single-blog__content'>{blog.content}</p>
            </div>

            <div className="comments-container">
                {
                    comments.length >= 1
                    ? <p className='comment-length'>{comments.length} Comment</p>
                    : ''
                }

                {comments.map((comment) => (
                    <div className='comments' key={comment.id}>
                        <p className='comment__name'><span>{comment.name}</span> on {comment.date}</p>
                        <p className='comment__comment'>{comment.comment}</p>
                    </div>
                ))}
            </div>

            <div className='comments__input-container'>
                <h4>Submit a comment</h4>
                <textarea className='comment__input-comment' onChange={(e) => setComment(e.target.value)} name="comment" id="comment" rows="5" placeholder='Comment*'></textarea>
                <input className='comment__input-name' onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder='Name*' />
                <button className='comment__submit-btn' onClick={handleClick}>Submit</button>
            </div>
            <Footer />
        </>
    )
}

export default Blog


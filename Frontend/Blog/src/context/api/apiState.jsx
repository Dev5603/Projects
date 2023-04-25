import { useState, useEffect } from "react";
import ApiContext from "./apiContext";

const ApiState = (props) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetchAPI()
    }, [])

    const fetchAPI = async () => {
        const response = await fetch('http://127.0.0.1:8000/blogs/')
        const results = await response.json()
        setBlogs(results.blog)
    }

    return (
        <ApiContext.Provider value={blogs}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiState;
import React,{useEffect, useState} from 'react';
import {Link} from "react-router-dom";
const Post = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPost(data))


    }, [])
    return (
        <div className='page'>
            <h1>post</h1>
            <ol>
                {
                    post.map(
                        (p)=>(
                            <li>
                                
                            <Link to={`/post/${p.id}`}>{p.title}</Link>
                        
                            </li>
                        )                  
                    )
                }

            </ol>
        </div>
    )
}

export default Post

import React, { useEffect, useState } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const SinglePost = ({ match }) => {
    const [post, setPost] = useState([])
    const [comment, setComment] = useState([])
    const [dp, setDp] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then(response => response.json())
            .then(data => setPost(data))


    }, [])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`)
            .then(response => response.json())
            .then(data => setComment(data))


    }, [])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${match.params.id}`)
            .then(response => response.json())
            .then(data => setDp(data))


    }, [])







    return (
        <div className='page'>
            <h1>post</h1>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3><br />

            <div className='comment'>
                <ol>
                    {
                        comment.map(
                            (c) => (


                                <li>
                                    <ThumbUpIcon></ThumbUpIcon>
                                    <br></br>
                                    {c.name}<br /><br />
                                    {c.email}<br /><br />
                                    {c.body}<br /><br /><br /><br />

                                </li>
                            )
                        )
                    }
                </ol>
            </div>

        </div>
    )
}

export default SinglePost

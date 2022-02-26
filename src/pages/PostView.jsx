import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getAllKindsById } from '../services';
import '../styles/PostView.css'
import Comment from '../components/Comment';

export const PostView = () => {

    const { id } = useParams();

    const [post, setPost] = useState()
    useEffect(() => {
        getAllKindsById("posts", id).then(data => setPost(data))
    }, [])


    return (
        <div className="post_view_container">
            {post &&
                <ul>
                    <li> Post Name : {post.name}</li>
                    <li>User : {post.name}</li>     
                </ul>
                }
                <Comment/>  
        </div>
    )
}
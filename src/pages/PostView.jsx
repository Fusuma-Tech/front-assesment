import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getAllKindsById } from '../services';
import '../styles/PostView.css'
import CommentList from '../components/CommentList';

export const PostView = () => {

    const { id } = useParams();
    const [post, setPost] = useState()
    useEffect(() => {
        getAllKindsById("posts", id).then(data => setPost(data))
    }, [])

    return (
        <div >
            {post &&
                <div>
                    <div className="post_view_container">
                        <h2> Post Name : {post.name}</h2>
                        <h2>User : {post.user}</h2>
                    </div>
                    
                    <CommentList postId={post.id} />
                </div>
            }
        </div>
    )
}
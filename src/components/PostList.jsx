import "../styles/PostList.css";
import { getAllKinds } from '../services'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Post = () => {

  const [posts, setPosts] = useState()
  useEffect(() => {
    getAllKinds("posts").then(data => setPosts(data))
  }, [])

  return (
    <div>
      {posts &&
        posts.map(post =>
          <Link key={post.id} to={"/post/" + post.id} className="postLink" >
          <div className="post-container">
            <div className="post-name">{post.name}</div>
            <div>Posted by:{post.user}</div>
          </div>
          </Link>
        )}
    </div>
  )
};

export default Post;
import "../styles/PostList.css";
import { getAllKinds } from '../services'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AddPostPopup } from "./AddPostPopup";

const Post = () => {

  const [posts, setPosts] = useState()
  const [openPostPopup, setOpenPostPopup] = useState(false)
  const handlePostPopup = () => {
    setOpenPostPopup(!openPostPopup)
  }

  useEffect(() => {
    getAllKinds("posts").then(data => setPosts(data))
  }, [openPostPopup])

  return (
    <div>
      <button onClick={handlePostPopup} className="addPostButton">+ Add Post</button>
      {openPostPopup && <AddPostPopup trigger={handlePostPopup} />}
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
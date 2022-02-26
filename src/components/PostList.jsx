import "../styles/PostList.css";
import { getAllKinds, deleteData } from '../services'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AddPostPopup } from "./AddPostPopup";

const Post = () => {

  const [posts, setPosts] = useState([])
  const [openPostPopup, setOpenPostPopup] = useState(false)

  const handlePostPopup = (e) => {
    setOpenPostPopup(!openPostPopup)
  }

  const deletePost = (e,id) => {
    e.preventDefault()
    setPosts(currentPosts => currentPosts > 0 && currentPosts.filter(currentPosts !== currentPosts.id));
    deleteData("posts", id);
    getAllKinds("posts").then(data => setPosts(data))
  }
  useEffect(() => {
    getAllKinds("posts").then(data => setPosts(data))
  }, [openPostPopup, setOpenPostPopup])

  return (
    <div>
      <button onClick={e => handlePostPopup(e)} className="addPostButton">+ Add Post</button>
      {openPostPopup && <AddPostPopup trigger={handlePostPopup} />}
      {posts &&
        posts.map(post =>

          <Link key={post.id} to={"/post/" + post.id} className="postLink" >
            <div className="post-container">
              <div className="post-name">{post.name}</div>
              <div>Posted by:{post.user}</div>
              <button onClick={(e) =>
                deletePost(e,post.id)
              }>delete</button>
            </div>

          </Link>

        )}
    </div>
  )
};

export default Post;
import "../styles/PostList.css";
import { getAllKinds, deleteData,postAllKinds } from '../services'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AddPostPopup } from "./AddPostPopup";

const PostList = () => {

  const [posts, setPosts] = useState([])
  const [openPostPopup, setOpenPostPopup] = useState(false)

  const getPostsFromServer = () => {
    getAllKinds("posts").then(data => setPosts(data))
  }
  const handlePostPopup = (e) => {
    setOpenPostPopup(openPostPopup => !openPostPopup)
  }

  const deletePost = (e, id) => {
    e.preventDefault()
    deleteData("posts", id);
    setPosts(posts.filter(post => post.id !== id))
  }

  useEffect(() => {
    getPostsFromServer()
  }, [openPostPopup])

  return (
    <div>
      <button onClick={() => handlePostPopup()} className="addPostButton">+ Add Post</button>
      {openPostPopup && <AddPostPopup trigger={()=>handlePostPopup()}/>}
      {posts &&
        posts.map(post =>
          <Link key={post.id} to={"/post/" + post.id} className="postLink" >
            <div className="post-container">
              <div className="post-name">{post.name}</div>
              <div>Posted by:{post.user}</div>
              <button onClick={(e) =>deletePost(e, post.id)}>X</button>
            </div>
          </Link>
        )}
    </div>
  )
};

export default PostList;
import React from "react";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

import './PostForm.css'

const PostForm = (props) => {

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    props.newPostInfo.newPost({
        "id": props.newPostInfo.postList.length + 1,
        "name": e.target.title.value,
        "user": "ChristianCiudad",
        "text": e.target.text.value
      })
      navigate('/')
      
  }

  return (
    <div>
    <form className="postForm" onSubmit={handleSubmit}>
      <input type='text' className="formTitle" placeholder="Write a title..." name='title'></input>
      <textarea className="formText" placeholder="Here comes your post..." name='text'></textarea>
      <button className='postButton' type="submit" value="Submit">Post</button>
    </form>
    </div>
  );
};

export default PostForm;

import React from "react";
import axios from "axios"

import {getAllComments} from "../../../services/comments"

import "./NewComment.css"

const NewComment = ({commentsInfo}) => {

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const commentsNumber = await getAllComments
    console.log(commentsNumber.data)
    const commentData = {
      "id": commentsNumber,
      "postId": commentsInfo.postId,
      "user": "ChristianCiudad",
      "text": e.target.comment.value
    }
    axios.post(`http://localhost:3001/comments`, commentData)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    commentsInfo.changeCommentsList(commentData)
      
  }

  return (
    <div className="newCommentForm">
    <form onSubmit={handleSubmit}>
      <p className="userName" id='comment'>@ChristianCiudad</p>
      <input type='text' className="commentInput" placeholder="Write a comment..." name='comment'></input>
      <button className='postButton' type="submit" value="Submit">Post</button>
    </form>
    </div>
  );
};

export default NewComment;

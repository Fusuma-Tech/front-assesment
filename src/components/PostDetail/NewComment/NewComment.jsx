import React from "react";
import axios from "axios"

import {getAllComments} from "../../../services/comments"

import "./NewComment.css"

const NewComment = ({commentsInfo}) => {

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const commentData = {
      "postId": commentsInfo.postId,
      "user": "ChristianCiudad",
      "text": e.target.comment.value
    }
    axios.post(`http://localhost:3001/comments`, commentData)
      .then(res => {
        console.log("Comentario añadido correctamente!");
      })
      commentsInfo.changeCommentsList([...commentsInfo.commentsList,commentData])
      
  }

  return (
    <div className="newCommentForm">
    <form onSubmit={handleSubmit}>
      <p className="userName" id='comment'>@ChristianCiudad</p>
      <input type='text' className="commentInput" placeholder="Write a comment..." name='comment'></input>
      <input className='postButton' type="submit" value="Comment"/>
    </form>
    </div>
  );
};

export default NewComment;

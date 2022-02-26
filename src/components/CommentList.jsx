import "../styles/CommentList.css";
import React, { useState, useEffect } from 'react';
import { getAllKinds } from '../services';
import { AddCommentPopup } from "./AddCommentPopup";

const Comment = ({ postId }) => {
  const [comments, setComments] = useState()

  useEffect(() => {
    getAllKinds("comments").then(data =>
      setComments(data))
  }, [])

  const [openCommentPopup, setOpenCommentPopup]=useState(false)

  const handleCommentPopup =()=>{
    setOpenCommentPopup(openCommentPopup=>!openCommentPopup)
  }


  

  return (
    <div className="whole-comment-container">
     {openCommentPopup&& <AddCommentPopup postId={postId}/>}
      {
        comments &&
        comments.map(comment => comment.postId == postId &&
          <div key={comment.id} className="comment-container">
            <div className="comment-name">{comment.text}</div>
          </div>
        )
      }
      <button onClick={handleCommentPopup} className="addCommentButton">Add Comment</button>
    </div>
  );
};

export default Comment;

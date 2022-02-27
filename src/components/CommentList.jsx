import "../styles/CommentList.css";
import React, { useState, useEffect } from 'react';
import { getAllKinds } from '../services';
import { AddCommentPopup } from "./AddCommentPopup";

const Comment = ({ postId }) => {
  const [comments, setComments] = useState()
  const [openCommentPopup, setOpenCommentPopup] = useState(false)

  const handleCommentPopup = () => {
    setOpenCommentPopup(openCommentPopup => !openCommentPopup)
  }

  useEffect(() => {
    getAllKinds("comments").then(data =>
      setComments(data))
  }, [openCommentPopup])

  return (
    <div className="whole-comment-container">
      <h3>Comentarios</h3>
      {
        comments &&
        comments.map(comment => comment.postId === postId &&
          <div key={comment.id} className="comment-container">
            <div className="comment-user">  by: {comment.user}</div>
            <div className="comment-name">{comment.text}</div>
          </div>
        )}
      <button onClick={handleCommentPopup} className="addCommentButton">Add Comment</button>
      {openCommentPopup && <AddCommentPopup postId={postId} trigger={handleCommentPopup} />}
    </div>
  );
};

export default Comment;

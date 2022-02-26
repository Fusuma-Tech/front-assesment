import "../styles/CommentList.css";
import React, { useState, useEffect } from 'react';
import { getAllKinds } from '../services';

const Comment = ({ postId }) => {
  const [comments, setComments] = useState()

  useEffect(() => {
    getAllKinds("comments").then(data =>
      setComments(data))
  }, [])

  return (
    <div>
      {
        comments &&
        comments.map(comment => comment.postId == postId &&
          <div key={comment.id} className="comment-container">
            <div className="comment-name">{comment.text}</div>
            <div>{comment.user}</div>
          </div>
        )
      }
    </div>

  );
};

export default Comment;

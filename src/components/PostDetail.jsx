import {useState, useEffect} from 'react';
import { useParams } from 'react-router';

import "./Comment.css";

function PostDetail({ post}) {
  const params = useParams();



  return (
    <div className="Comment-container">
      <div className="Comment-name">New Post</div>
      <div>{post.name}</div>
      <div></div>
    </div>
  );
};

export default PostDetail;

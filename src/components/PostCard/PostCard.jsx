import React from 'react';
import { Link } from 'react-router-dom';
import './postCard.css'

function PostCard(post) {
  return (
    <div className='PostCard'>
      <Link to={`/posts/${post.id}`} key={post.id}>
        <div>
          <div>
            <h3>{post.title}</h3>
            <p><em>Written by</em> {post.user}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;

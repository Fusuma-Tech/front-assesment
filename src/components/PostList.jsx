import "../styles/Post.css";
import {getAllKinds} from '../services'
import React, { useState, useEffect } from 'react';


const Post = () => {

  const [posts, setPosts]=useState()
  useEffect(()=>{
      getAllKinds("posts").then(data=>setPosts(data))
  },[])

  return (
<div>
{posts&&
posts.map(post=>
//This could be another component with name and user as props
<div className="post-container">
<div className="post-name">{post.name}</div>
<div>{post.user}</div>
</div>
)}

</div>
  )
};

export default Post;
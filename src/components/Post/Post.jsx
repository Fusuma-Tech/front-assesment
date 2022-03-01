import React from "react";

import './Post.css'

const Post = (props) => {

  const infoPost = props.postInfo  

  return (
    <div className="post">
      <h3 className="postTitle">{infoPost.name.toUpperCase()}</h3>
      <p className="userName">@{infoPost.user}</p>
      <p className="postText"> {infoPost.text}</p>
    </div>
  );
};

export default Post;

import React from "react";

const Comment = ({commentInfo}) => {
  return <div className="postDetail">
  <hr id='line'/>
    <p className="userName" id='comment'>@{commentInfo.user}</p>
    <p className="postText"> {commentInfo.text} </p>
  </div>;
};

export default Comment;

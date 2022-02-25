import "./Comment.css";

function Post({post}) {



  
  return (
    <div className="Comment-container">
      <div className="Comment-name">New Post</div>
      <div>{post.name}</div>
      <div></div>
    </div>
  );
};

export default Post;

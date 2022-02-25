import "./Comment.css";
import { Link } from 'react-router-dom';


function Post({ post }) {


  return (
    <div className="Comment-container">
      <div className="Comment-name">New Post</div>
      <div>{post.name}</div>
      <div>{post.id}</div>

      <Link to={`/posts/${post.id}`}></Link>
    </div>
  );
};

export default Post;

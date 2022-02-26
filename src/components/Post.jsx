import "./Comment.css";
import { Link } from 'react-router-dom';


function Post({ post }) {


  return (

    <Link to={`/post/${post.id}`}>
      <div className="Comment-container">
        <div className="Comment-name">{post.name}</div>
        <div>{post.user}</div>
      </div>
    </Link >

  );
};

export default Post;

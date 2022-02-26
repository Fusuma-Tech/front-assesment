import "../Comment.css";
import { Link } from 'react-router-dom';


function Post({ post, onDeletePost }) {

  /*Controlador para borrar el post que enviamos al padre (PostList)*/
  function handleDeletePost(id) {
    onDeletePost(id);
  }


  return (

    <div className="Comment-container">
      <Link to={`/post/${post.id}`}>

        <div className="Comment-name">{post.name}</div>
        <div>{post.user}</div>
      </Link >
      <button onClick={() => handleDeletePost(post.id)} value="Comentar">Delete post</button>

    </div>


  );
};

export default Post;

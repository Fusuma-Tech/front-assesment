import "../Post.css";
import { Link } from 'react-router-dom';


function Post({ post, onDeletePost }) {

  /*Controlador para borrar el post que enviamos al padre (PostList)*/
  function handleDeletePost(id) {
    onDeletePost(id);
  }

  /*En la parte de JSX tendremos un Link que nos dirigirá a una nueva vista con el post indicado. El ID del post lo vamos a guardar en la url en forma de param*/
  return (

    <div className="column">
      <div className='card'>
      <Link to={`/post/${post.id}`} style={{paddingLeft: "13px", textDecoration: 'none'}}>
        <h3>{post.name}</h3>
        <div>{post.user}</div>
      </Link >
      <button  className='button' style={{backgroundColor:"#b1dee9"}}onClick={() => handleDeletePost(post.id)} value="Comentar">Delete post</button>
      </div>
    </div>


  );
};

export default Post;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getPostById } from '../../services/posts'
import { getAllComments } from '../../services/comments'
import Comment from "../comments/Comment"
import "../Comment.css";

function PostDetail() {

  /*A este componente llegamos a través del router cuando hemos clickado en un post. Recuperamos el ID del post del parámetro guardado en la url con la ayuda del useParams*/
  const params = useParams();
  const { id } = params;

  /*Iniciamos el estado: el post, un array de comentarios asociados a este post, un objetos newComment auxiliar y otro newCommentDone*/
  const [state, setState] = useState({
    post: {
      name: '',
      description: '',
      user: ''
    },
    newComment: {
      idPost: '',
      text: '',
      signed: ''
    },
    newCommentDone: {
      idPost: '',
      text: '',
      signed: ''
    },
    comments: []
  });

  /*Recuperamos el post a partir del ID y todos los comentarios de toda la BBDD, con una llamada asíncrona al servicio*/
  useEffect(() => {
    async function fetchPost() {
      console.log('Fetching post...');
      let post = await getPostById(id);
      console.log('Fetching comments...');
      let allComments = await getAllComments();

      /*Filtramos los comentarios para sólo quedarnos con los asociados al post. 
      Si se tuviese acceso a la API se podría crear un controlador que me recupere el post haciendo un populate con los comentarios.
      Nos ahorrariamos una petición al servidor y traernos todos los comentarios de la BBDD*/
      let comments = allComments.filter(comment => (comment.postId === parseInt(id)))


      if (!isUnmounted) {
        setState({
          ...state,
          post: {
            name: post.name,
            description: post.description,
            user: post.user
          },
          comments: comments
        })

      }
    }

    let isUnmounted = false;

    fetchPost();

    return () => {
      isUnmounted = true;
    }
  }, []);
  
  /*Este controlador va refrescando el textarea del form que se está rellenando*/
  const handleChangeCommentField = (newComment) => {

    const { name, value } = newComment.target
    setState(state => {

      return {
        ...state,
        newComment: {
          ...state.newComment,
          idPost: id,
          [name]: value
        }
      }
    });
  }

  /*Añadimos el post al array de posts y seteamos el estado para que se actualice la cadena de posts.*/
  const handleClickCommentButton = () => {
    console.log(state.newComment)
    const newCommentDone = state.newComment;
    setState(state => {

      return {
        ...state,
        newComment: {
          ...state.newComment,
          idPost: '',
          text: '',
          signed: ''
        },
        newCommentDone: {
          idPost: newCommentDone.idPost,
          text: newCommentDone.text,
          signed: newCommentDone.signed
        },
        comments: [newCommentDone, ...state.comments]
      }
    });

  }
  const { post, newComment, comments } = state;

  return (
    <div style={{ paddingTop: "50px" }}>

      <div className='card'>

        <div class="title">
          <h1>{post.name}</h1>
        </div>

        <p class="paragraph">{post.description}</p>
        <hr></hr>

        <div>Autor: {post.user}</div>

      </div>

      <div className='row'>
        <h2 className="title">Comments of post</h2>

        <div className='column'>

          <div >
            {comments.map(comment => (
              <div style={{ paddingTop: "20px" }} key={comment.id} >
                <Comment comment={comment}></Comment></div>
            ))}

          </div>
        </div>
        <div className="input-group mb-2 column">
          <span className="input-group-text  bg-white border-warning text-warning"><i className="fa fa-edit fa-fw"></i></span>

          <div class="row">
            <div class="col-25">
              <label for="subject">Comment</label>
            </div>
            <div class="col-75">
              <textarea id="subject" name="text" placeholder="comment..." value={newComment.text} onChange={handleChangeCommentField} style={{ height: "200px" }}></textarea>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="fname">Your Name</label>
              </div>
              <div class="col-75">
                <textarea name="signed" placeholder="signed..." value={newComment.signed} onChange={handleChangeCommentField}></textarea>
              </div>
            </div>
            <div class="col-75">
              <button className="button" onClick={handleClickCommentButton} value="Comentar">Comment</button>
            </div>
          </div>
          <br></br>
          <div class="row">
          </div>
        </div>
      </div>

      <a href="/" className="link">Atrás</a>
    </div>



  );
};

export default PostDetail;

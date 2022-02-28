import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getPostById } from '../../services/posts'
import { getAllComments } from '../../services/comments'
import Comment from "../comments/Comment"
import "../Comment.css";

function PostDetail() {

  const params = useParams();
  const { id } = params;


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

  useEffect(() => {
    async function fetchPost() {
      console.log('Fetching post...');
      let post = await getPostById(id);
      console.log('Fetching comments...');
      let allComments = await getAllComments();
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

  const handleChange = (newComment) => {

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

  const handleClick = () => {
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
              <textarea id="subject" name="text" placeholder="comment..." value={newComment.text} onChange={handleChange} style={{ height: "200px" }}></textarea>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="fname">Your Name</label>
              </div>
              <div class="col-75">
                <textarea name="signed" placeholder="signed..." value={newComment.signed} onChange={handleChange}></textarea>
              </div>
            </div>
            <div class="col-75">
              <button className="button" onClick={handleClick} value="Comentar">Comment</button>
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

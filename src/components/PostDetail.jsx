import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getPostById } from '../services/posts'
import { getAllComments } from '../services/comments'
import Comment from "./Comment";



import "./Comment.css";

function PostDetail() {
  // const params = useParams();


  // const [post, setState] = useState({});

  // useEffect(() => {
  //   async function fetchPost() {
  //     const { id } = params;
  //     console.log('Fetching post...');
  //     let post = await getPostById(id);


  //     if (!isUnmounted) {
  //       setState({
  //         ...post,
  //         name: post.name,
  //         user: post.user

  //       })

  //     }
  //   }
  //   let isUnmounted = false;

  //   fetchPost();
  //   console.log("despues fetch")
  //   console.log(new Date())

  //   return () => {
  //     isUnmounted = true;
  //   }
  // }, []);
  // const { user, name } = post;

  const params = useParams();
  const { id } = params;


  const [state, setState] = useState({
    post: {
      name: '',
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
      let comments = await getAllComments();

      if (!isUnmounted) {
        setState({
          ...state,
          post: {
            name: post.name,
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
    <div className="Comment-container">
      <div className="Comment-name">{post.name}</div>
      <div>Autor: {post.user}</div>
      <div className="input-group mb-2">
        <span className="input-group-text  bg-white border-warning text-warning"><i className="fa fa-edit fa-fw"></i></span>
        <textarea name="text" placeholder="comment..." value={newComment.text} onChange={handleChange}></textarea>
        <textarea name="signed" placeholder="signed..." value={newComment.signed} onChange={handleChange}></textarea>
      </div>
      <button onClick={handleClick} value="Comentar">Comment</button>



      <h2>Comments of post</h2>
      <div>
        {comments.map(comment => (
          <div key={comment.id} >
            <Comment comment={comment}></Comment></div>
        ))}
      </div>


      <a href="/" className="btn btn-secondary m-3 my-sm-0">Atrás</a>
    </div>



  );
};

export default PostDetail;

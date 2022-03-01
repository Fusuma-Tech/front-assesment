import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { API_URL } from '../../constants/constants';
import { fetchPOST } from '../../services/fetchService';
import Comment from '../Comment/Comment';
import './PostDetails.css';

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [text, setText] = useState('');
  const [user, setUser] = useState('');
  const [postId, setPostId] = useState('');

  const { data: post, loading, error } = useFetch(API_URL + 'posts/' + id);
  const { data: comments, pending, isError } = useFetch(API_URL + 'comments');

  useEffect(() => {
    setPostId(Number(id));
  }, [id]);

  const handleClick = async () => {
    await fetch(API_URL + 'posts/' + id, {
      method: 'DELETE',
    });
    await navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { postId, text, user };
    await fetchPOST('comments', data);
    await navigate(`/posts/${id}`);
  };

  return (
    <div>
      {(error || isError) && <p>Something went wrong, try again</p>}
      {!post ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="Post-Details">
            <h2>{post.title}</h2>
            <h3>
              <em>Written by {post.user}</em>
            </h3>
            <p>{post.description}</p>
            <button className="Delete-btn" onClick={handleClick}>
              Delete Post
            </button>
          </div>
          <div className="Comments-Container">
            <div>
              <form className="Form" onSubmit={handleSubmit}>
                <h3>Leave a comment</h3>
                <div className="Form-Input">
                  <label htmlFor="title">Title</label>
                  <input
                    className="Input"
                    name="title"
                    id="title"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <div className="Form-Input">
                  <label className="Label" htmlFor="user">
                    User
                  </label>
                  <input
                    className="Input"
                    name="user"
                    id="user"
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
                <div>
                  <button className='Add-btn' type="submit">Add Comment</button>
                </div>
              </form>
              <div>
                {comments &&
                  comments
                    .filter((comment) => comment.postId === post.id)
                    .map((comment) => <Comment key={comment.id} {...comment} />)
                    .reverse()}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;

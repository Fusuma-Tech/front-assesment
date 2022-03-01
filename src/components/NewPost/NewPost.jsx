import { useState } from 'react';
import { fetchPOST } from '../../services/fetchService';
import { useNavigate } from 'react-router-dom';
import './NewPost.css'

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUser] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { title, description, user };

    fetchPOST('posts', data);

    setTimeout(() => {
      navigate('/')
    }, 1000);
  };

  return (
    <form className='Form-Container' onSubmit={handleSubmit}>
      <h2>Add a new Post</h2>
      <div className='Form-Input'>
        <label htmlFor="title">Title</label>
        <input
          className='Input'
          name="title"
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='Form-Input'>
        <label htmlFor="description">Description</label>
        <input
          className="Input"
          name="description"
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='Form-Input'>
        <label className="Label" htmlFor="user">
          User
        </label>
        <input
          className='Input'
          name="user"
          id="user"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div>
       <button className='Add-btn' type="submit">Add Post</button>
      </div>
    </form>
  );
};

export default NewPost;

import logo from "./logo.svg";
import "./App.css";

import Comment from "./components/Comment";
import { useEffect, useState } from "react";
import callToApiPosts from "./services/posts";
import callToApiComments from "./services/comments";

function App() {

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [newPost, setNewPost] = useState({
    name: '',
    user: ''
  });

  // Llamamos a callToApiPosts
  useEffect(() => {
    callToApiPosts().then((response) => {
      setPosts(response);
    })
  }, []);

  // Llamamos a callToApiComments
  useEffect(() => {
    callToApiComments().then((response) => {
      setComments(response);
    })
  }, []);

  // Creamos el map para los post
  const postsListHTML = posts.map((eachPost) => (
    <li key={eachPost.id}>
    <p>{eachPost.name}</p>
    <p>{eachPost.user}</p>
  </li>
  ));

  const handleChangeName = (ev) => {
    setNewPost(
      {
        ...newPost,
        name: ev.currentTarget.value
      }
    );
  };

  const handleChangeUser = (ev) => {
    setNewPost(
      {
        ...newPost,
        user: ev.currentTarget.value
      }
    );
  };

  const handleClickPost = () => {
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Frontend Assesment - Fusuma</p>
      </header>
      <body className="App-body">
        Hello there
        <section>
          <h1>Posts</h1>
          <ul>
            { postsListHTML }        
          </ul>
          <form className="form" onSubmit={(ev) => ev.preventDefault()}>
            <label htmlFor="post__label">Name</label>
            <input onChange={handleChangeName} value={newPost.name} type="text" id="form__input-post" />

            <label htmlFor="post__label">User</label>
            <input onChange={handleChangeUser} value={newPost.user} type="text" id="form__input-post" />
            <button onClick={handleClickPost} type="submit">New post</button>
          </form>
        </section>
        <Comment comments={comments} />
      </body>
    </div>
  );
}

export default App;

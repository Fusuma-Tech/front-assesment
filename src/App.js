import logo from "./images/logo.png";
import "./App.scss";


import Post from "./components/Post";
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
  const [newComment, setNewComment] = useState({
    user: '',
    text: ''
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

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <h1>Post and comment</h1>
        </div>
      </header>

      <body className="App-body">
        <Post setComments={setComments} setNewComment={setNewComment} newComment={newComment} comments={comments} setPosts={setPosts} setNewPost={setNewPost} newPost={newPost} posts={posts} />
        
      </body>

    </div>
  );
}

export default App;

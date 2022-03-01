import logo from "./logo.svg";
import "./App.css";

import Comment from "./components/Comment";
import { useEffect, useState } from "react";
import callToApiPosts from "./services/posts";
import callToApiComments from "./services/comments";

function App() {

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

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
        </section>
        <Comment comments={comments} />
      </body>
    </div>
  );
}

export default App;

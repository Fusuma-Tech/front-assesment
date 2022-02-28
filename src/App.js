import logo from "./logo.svg";
import "./App.css";

import Comment from "./components/Comment";
import { useEffect, useState } from "react";
import callToApiPosts from "./services/posts";

function App() {

  const [posts, setPosts] = useState('');

  // Llamamos a callToApiPosts
  useEffect(() => {
    callToApiPosts().then((response) => {
      setPosts(response);
    })
  }, [])

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
            <li>
              <p>{posts.name}</p>
              <p>{posts.user}</p>
            </li>
          </ul>
        </section>
        <Comment />
      </body>
    </div>
  );
}

export default App;

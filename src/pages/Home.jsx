import logo from "../logo.svg";
import "../App.css";
import Comment from "../components/Comment";
import Post from '../components/Post'
import {getAllComments} from '../services/comments'
import React, { useState, useEffect } from 'react';
function App() {

const [commentFetch, setCommentFetch] = useState(getAllComments())

  useEffect(() => {
    setCommentFetch(getAllComments())
    console.log(commentFetch)
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Frontend Assesment - Fusuma</p>
      </header>
      <div className="App-body">
        Hello there
        <Post />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}

export default App;
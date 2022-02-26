import logo from "./logo.svg";
import "./App.css";
import React, {useEffect, useState} from 'react'

import {getAllPosts} from './services/posts'



import Comment from "./components/Comment";

function App() {
  
  const [postsList, changePostList] = useState([])
  const [commentsList, changeCommentsList] = useState([])

  getAllPosts().then(data=>console.log(data[0].id))

//   useEffect(() =>{
//     const getProducts = async (searchValue) =>{
//       try{
//        let uri = "localhost:3001"
        
//       } catch (err){
//         console.error(err)
//       }
      
//     }
//     getComments(valueSearch);
//  },[postsList])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Frontend Assesment - Fusuma</p>
      </header>
      <body className="App-body">
        <Comment />
      </body>
    </div>
  );
}

export default App;

import logo from "../logo.svg";
import "../App.css";
import PostList from '../components/PostList'
import {getAllKinds} from '../services'
import React, { useState, useEffect } from 'react';

function Home() {

    const [comments, setComments]=useState()
useEffect(()=>{
    getAllKinds("comments").then(data=>setComments(data))
},[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Frontend Assesment - Fusuma</p>
      </header>
      <div className="App-body">
       <PostList/>
      </div>
    </div>
  );
}

export default Home;
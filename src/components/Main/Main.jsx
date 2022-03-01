import React, {useEffect, useState} from 'react'

import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import PostForm from '../PostForm'
import PostDetail from '../PostDetail/PostDetail'


import {getAllPosts} from '../../services/posts.js'
import axios from 'axios'


const Main = () => {

  const [postList, changePostList] = useState([]);

  useEffect(()=>{
    getAllPosts().then(data=>{
      changePostList(data)
    })
  },[])

  const newPost = (postInfo) =>{
    changePostList([...postList,postInfo])
  }
  const deletePost = (iState, iDb) =>{
    const post = postList.filter((post, j) => j !== iState)
    changePostList(post)
    axios.delete(`http://localhost:3001/posts/${iDb}`)
      .then(() => console.log({ status: 'Delete successful' }));
  }
  const newPostInfo = {
    newPost,
    postList,
    deletePost
  }


  return (
    <main className='main'>
    <Routes>
      <Route path='/' element={<Home postInfo={newPostInfo}/>}/>
      <Route path='/newPost' element={<PostForm newPostInfo={newPostInfo}/>}/>
      <Route path='/post' element={<PostDetail postInfo={newPostInfo}/>}/>
    </Routes>      
  </main>
  );
};

export default Main;

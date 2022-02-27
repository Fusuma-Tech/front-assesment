import React, {useEffect, useState} from 'react'

import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import PostForm from '../PostForm'


import {getAllPosts} from '../../services/posts.js'


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

  const newPostInfo = {
    newPost,
    postList
  }


  return (
    <main className='main'>
    <Routes>
      <Route path='/' element={<Home postInfo={newPostInfo}/>}/>
      <Route path='/newPost' element={<PostForm newPostInfo={newPostInfo}/>}/>
    </Routes>      
  </main>
  );
};

export default Main;

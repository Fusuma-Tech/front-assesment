import React, {useEffect, useState} from 'react'

import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import NewPost from '../NewPost'


import {getAllPosts} from '../../services/posts.js'


const Main = () => {

  const [postList, changePostList] = useState([]);

  useEffect(()=>{
    getAllPosts().then(data=>{
      changePostList(data)
    })
  },[])


  return (
    <main className='main'>
    <Routes>
      <Route path='/' element={<Home postInfo={postList}/>}/>
      <Route path='/newPost' element={<NewPost/>}/>
    </Routes>      
  </main>
  );
};

export default Main;

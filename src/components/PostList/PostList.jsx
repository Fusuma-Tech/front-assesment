import React from "react";
import {Link} from 'react-router-dom'

import './PostList.css'

import Post from '../Post'

const PostList = (props) => {

  const postList = props.postInfo.postList

  const paintPosts = () =>{
    if(props.postInfo){

      return postList.map((postInfo,i)=><div><Link to={`/post/?id=${i+1}`}><Post postInfo={postInfo} delete={props.postInfo.deletePost} key={i}/></Link><button className='postButton' onClick={()=>props.postInfo.deletePost(i)}>Borrar</button></div>)
    }
   }   
  return <div className="productList">
      {paintPosts()}
  </div>;
};

export default PostList;

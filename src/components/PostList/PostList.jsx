import React from "react";
import {Link} from 'react-router-dom'

import './PostList.css'

import Post from '../Post'

const PostList = (props) => {

  // console.log(props.postInfo)

  const paintPosts = () =>{
    if(props.postInfo){

      return props.postInfo.map((postInfo,i)=><Link to={`/post/?id=${i+1}`}><Post postInfo={postInfo} key={i}/></Link>)
    }
   }   
  return <div className="productList">
      {paintPosts()}
  </div>;
};

export default PostList;

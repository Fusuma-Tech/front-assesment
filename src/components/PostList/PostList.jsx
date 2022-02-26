import React from "react";

import Post from '../Post'

const PostList = (props) => {

  console.log(props.postInfo)

  const paintPosts = () =>{
    if(props.postInfo){

      return props.postInfo.map((postInfo,i)=><Post postInfo={postInfo} key={i}/>)
    }
   }   
  return <div className="productList">
      {paintPosts()}
  </div>;
};

export default PostList;

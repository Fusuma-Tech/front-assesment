import React, {useState, useEffect} from "react";

import Comment from "../Comment"

import {getCommentByPostId} from '../../services/comments'

const CommentList =({commentsList}) => {

  console.log({commentsList})

  const paintComments = () =>{

    return  commentsList.map((commentInfo,i)=><Comment key={i} commentInfo={commentInfo}/>)    
   }   

  return <div className="commentList">
  {commentsList?paintComments():null}
  </div>;
};

export default CommentList;

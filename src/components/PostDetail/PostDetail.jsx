import React, {useState, useEffect} from "react";
import { Link, useSearchParams } from 'react-router-dom'

import Post from "../Post/Post"
import NewComment from "./NewComment/NewComment"
import CommentList from "../CommentList/CommentList";
import {getCommentByPostId} from "../../services/comments.js"
import './PostDetail.css'


const PostDetail = (props) => {

  const [searchParams] = useSearchParams();
  const [postDetail, changePostDetail] = useState({});
  const [commentsList, changeCommentsList] = useState([]);
  const [loading, setLoading] = useState(true)

   console.log(postDetail)
  const postId = searchParams.get('id')
  const commentsInfo={
    commentsList,
    changeCommentsList,
    postId

  }

  useEffect(()=>{
    const getPostDetail = async (id) => {
      const data = await props.postInfo.postList[id-1]

      changePostDetail(data)
      setLoading(false)
    }
    getCommentByPostId(postId).then(data=>{
      changeCommentsList(data)
    })
    getPostDetail(postId)
  },[])

  console.log(commentsList)
  return <div>
  {
    loading 
      ? <p>loading...</p> 
      : <>
      <Link to="/"><button className='postButton' value="Submit">Home</button></Link>
      <Post postInfo={postDetail}/>
      <NewComment commentsInfo={commentsInfo}/>
      <CommentList commentsList={commentsList}/>
      </>
  }
  </div>;
};

export default PostDetail;

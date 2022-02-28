import React, {useState, useEffect} from "react";
import { Link, useSearchParams } from 'react-router-dom'

import Comment from "../Comment/Comment";
import Post from "../Post/Post"
import './PostDetail.css'

import {getPostById} from '../../services/posts.js'

const PostDetail = (props) => {

  const [searchParams] = useSearchParams();
  const [postDetail, changePostDetail] = useState({});
  const [loading, setLoading] = useState(true)

  // console.log(postDetail)

  useEffect(()=>{
    const getPostDetail = async (id) => {
      const data = await props.postInfo.postList[id-1]

      changePostDetail(data)
      setLoading(false)
    }

    getPostDetail(searchParams.get('id'))
  },[searchParams.get('id')])

  return <div>
  {
    loading 
      ? <p>loading</p> 
      : <>
      <Post postInfo={postDetail}/>
      <Comment/>
      </>
  }
  </div>;
};

export default PostDetail;

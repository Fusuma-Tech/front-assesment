import React from "react";

import './Home.css'

import PostList from '../PostList'
import NewPost from '../NewPost'

const Home = (props) => {
  return (
    <div className="postList">
    <NewPost/>
    <PostList postInfo={props.postInfo}/>
    </div>
  );
};

export default Home;

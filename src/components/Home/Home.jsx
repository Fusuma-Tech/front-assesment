import React from "react";

import './Home.css'

import PostList from '../PostList'
import NewPost from '../NewPost'

const Home = (props) => {
  console.log(props)
  return (
    <main>
    <NewPost/>
    <div className="postList">
    <PostList postInfo={props.postInfo.postList}/>
    </div>
    </main>
  );
};

export default Home;

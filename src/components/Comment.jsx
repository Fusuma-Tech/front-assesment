import "./Comment.css";
import Button from "./Buttons";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Link } from "react-router-dom";

const Comment = () => {
  const {postsData,commentsData,getPostShowed} = useContext(PostContext);

  return (
    <div>
      {postsData.map(post=>{
        return(
          <div key={post.id} className="Comment-container">
            <button className="buttonMainPage" onClick={()=>{getPostShowed(post.id-1)}}><Link to={"/showPost"} className="Comment-link">See this post detailed</Link></button>
            <div className="Comment-name">{post.name}</div>
            {commentsData.map((comment)=>{
              if (post.id === comment.postId) {
                return(
                  <div key={comment.id} className="comment">
                    <div>{comment.text}</div>
                    <Button buttonEffect="deleteComment" thisId={comment.id}/>
                  </div>
                )
              }
              else{
                return null
              }
            })}
          <Button buttonEffect="add" thisPost={post}/>
          <Button buttonEffect="delete" thisPost={post}/>
          </div>
        )
      })}
      </div>
    );
};

export default Comment;

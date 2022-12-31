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
            <Button buttonEffect="delete" thisPost={post}/>
            <button className="buttonPostDatails" onClick={()=>{getPostShowed(post.id-1)}}>
              <Link to={"/showPost"} className="Comment-link">
                <i className="fa fa-info-circle" style={{fontSize:"50px"}}></i>
              </Link>
            </button>
            <div className="Comment-name">{post.name}</div>
            {commentsData.map((comment)=>{
              if (post.id === comment.postId) {
                return(
                  <div key={comment.id} className="comment">
                    <div>{comment.text}</div>
                  </div>
                )
              }
              else{
                return null
              }
            })}
          </div>
        )
      })}
      </div>
    );
};

export default Comment;

import "./Comment.css";
import { getAllComments } from "../services/comments";
import { useEffect, useState } from "react";

const Comment = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    async function fetchComments () {
      const fetchedComments = await getAllComments()
      setComments(fetchedComments)
    }

    fetchComments()
  }, [])

  return (
    <div className="Comment-container">
      <div className="Comment-name">Name</div>
      <div>User name</div>
      <div>
      {comments
        .map(comment => {
          return (<div>{comment.user}<br/>{comment.text}</div>)
        })
        }
      </div>

      
    </div>
  );
};

export default Comment;

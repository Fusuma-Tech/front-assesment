import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteComment, getCommentsById } from "../../services/comments";

import "./Comments.css";
import FormComment from "../Forms/FormComments";

function Comments() {
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getCommentsById(id).then((data) => {
      setComments([...data]);
    });
  }, []);

  return (
    <div className="Comments-container">
      <FormComment postId={id} />
      {comments.map((comment) => (
        <div className="Comment-container" key={comment.id}>
          <p className="Comment-user">
            <strong>{comment.user}</strong>
          </p>
          <p className="Comment-text">{comment.text} </p>
          <button
            className="Comments-button"
            onClick={() => deleteComment(comment.id)}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}

export default Comments;

import "../Comment.css";
import "../Post.css";


const Comment = ({ comment }) => {
  return (
    <div className="card">
      <h2>{comment.signed}</h2>
      <div>{comment.text}</div>
    </div>
  );
};

export default Comment;

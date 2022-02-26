import "../Comment.css";

const Comment = ({comment}) => {
  return (
    <div className="Comment-container">
      <div>Comentario:</div>
      <div>{comment.text}</div>
      <div>{comment.signed}</div>
    </div>
  );
};

export default Comment;

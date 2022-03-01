import callToApiComments from "../services/comments";
import "./Comment.css";

const Comment = (props) => {
  // Creamos el map para los comentarios
  const commentsListHtml = props.comments.map((eachComment) => (
    <li key={eachComment.id}>
      <p>{eachComment.user}</p>
      <p>{eachComment.text}</p>
    </li>
  ));

  return (
    <div className="Comment-container">
      <div className="Comment-name">Name</div>
      <div>User name</div>
      <ul>
        {commentsListHtml}
      </ul>
    </div>
  );
};

export default Comment;

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
    <>
    <div className="Comment-container">
      <h3 className="commentTitle">Comments</h3>
      <ul className="ulCommentStyles">
        {commentsListHtml}
      </ul>
    </div>

    <form className="form">
        <label htmlFor="userComment">User</label>
        <input id="userComment" type="text" />

        <label htmlFor="textComment">Comment</label>
        <input id="textComment" type="text" />

        <button type="submit">Add new comment</button>
    </form>
    </>
  );
};

export default Comment;

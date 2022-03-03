import "./Comment.css";

const Comment = (props) => {
  // Creamos el map para los comentarios
  const commentsListHtml = props.comments.map((eachComment) => (
    <li key={eachComment.postId}>
      <p className="userComment">{eachComment.user}</p>
      <p className="userText">{eachComment.text}</p>
    </li>
  ));

  const handleUserComment = (ev) => {
    props.setNewComment({
      ...props.newComment,
      user: ev.currentTarget.value,
    });
  };

  const handleTextComment = (ev) => {
    props.setNewComment({
      ...props.newComment,
      text: ev.currentTarget.value,
    });
  };

  const handleClickComment = (ev) => {
    props.setComments([...props.comments, props.newComment]);
  };

  return (
    <>
      <div className="Comment-container">
        <h3 className="commentTitle">Comments</h3>
        <ul className="ulCommentStyles">{commentsListHtml}</ul>
      </div>

      <form className="form" onSubmit={(ev) => ev.preventDefault()}>
        <label className="commentLabel" htmlFor="userComment">
          User
        </label>
        <input
          onChange={handleUserComment}
          value={props.newComment.user}
          className="commentInputUser"
          id="userComment"
          type="text"
        />

        <label className="commentLabel" htmlFor="textComment">
          Comment
        </label>
        <input
          onChange={handleTextComment}
          value={props.newComment.text}
          className="commentInputText"
          id="textComment"
          type="text"
        />

        <button
          onClick={handleClickComment}
          className="buttonNewComment"
          type="submit"
        >
          Add new comment
        </button>
      </form>
    </>
  );
};

export default Comment;

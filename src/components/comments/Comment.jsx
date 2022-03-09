import "../Comment.css";
import "../Post.css";

/*Destructuring: Es mejor que lleguen las props como elementos primitivos para evitar que se reinstancien
cada vez que cambie la página.*/
const Comment = ({ comment: {text, signed} }) => {
  return (
    <div className="card">
      <h2>{signed}</h2>
      <div>{text}</div>
    </div>
  );
};

export default Comment;

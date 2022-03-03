import "./Form.css";
import { useState } from "react";
import { createNewComment } from "../../services/comments";

export default function FormComment({ postId }) {
  const [user, setUser] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([user, text].includes("")) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    const comment = {
      user: user,
      text: text,
    };
    createNewComment(comment, postId);
  };

  const errorText = <p className="form-error">All fields are mandatory</p>;
  return (
    <form action="" onSubmit={handleSubmit}>
      {error && errorText}
      <div className="user-container">
        <label htmlFor="user">From:</label>
        <input
          className="user-input"
          type="text"
          id="name"
          placeholder="Alfredo"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <br />
      <div className="post-container">
        <label htmlFor="post" className="post-label">
          Comment:
        </label>
        <textarea
          type="text"
          id="post"
          placeholder="My like Nvidia GPU more than AMD because the driver support."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <br />
      <button className="Form-button" type="submit">
        +
      </button>
    </form>
  );
}

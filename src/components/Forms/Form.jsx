import "./Form.css";
import { useState } from "react";
import { createNewPost } from "../../services/posts";

export default function Form({ newPostEvent }) {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    console.log(newPostEvent);
    e.preventDefault();
    if ([user, name].includes("")) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    const postInfo = {
      user: user,
      name: name,
    };
    createNewPost(postInfo, newPostEvent);
  };

  const errorText = <p className="form-error">All fields are mandatory</p>;
  return (
    <form action="" onSubmit={handleSubmit}>
      {error && errorText}
      <div className="user-container">
        <label htmlFor="user">User</label>
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
          Post
        </label>
        <textarea
          type="text"
          id="post"
          placeholder="What is your favourite SO?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <button className="Form-button" type="submit">
        +
      </button>
    </form>
  );
}

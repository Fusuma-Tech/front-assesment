import { useState } from "react";

function CreateComment() {
  const [text, setText] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3001/comments`, {
      method: "POST",
      body: JSON.stringify({ text, user }),
    });
    await res.json();
  };

  return (
    <div className="createcomment">
      <form className="comentario" onSubmit={handleSubmit}>
        <label>
          <input
            className="comment"
            placeholder="Escribe tu comentario..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            className="usercomment"
            placeholder="Usuario..."
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <div className="button">
          <button className="action-button">Publica</button>
        </div>
      </form>
    </div>
  );
}

export default CreateComment;

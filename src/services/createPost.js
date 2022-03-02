import { useState } from "react";

function CreatePost() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      body: JSON.stringify({ name, user }),
    });
    await res.json();
  };

  return (
    <div>
      <form className="post" onSubmit={handleSubmit}>
        <label>
          <input
            className="createpost"
            placeholder="Escribe un post..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="userpost"
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

export default CreatePost;

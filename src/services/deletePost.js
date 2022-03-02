import { useParams } from "react-router-dom";

function DeletePost() {
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm("¿Estás seguro de eliminar tu historia?")) {
      const res = await fetch(`http://localhost:3001/post/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      await res.json();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="button">
        <button className="action-button">Eliminar post</button>
      </div>
    </form>
  );
}

export default DeletePost;

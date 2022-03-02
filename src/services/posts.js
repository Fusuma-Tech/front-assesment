import { Link } from "react-router-dom";
import UseFetch from "./usefetch";

function Posts() {
  const results = UseFetch(`http://localhost:3001/posts`);

  if (!results) {
    return <div>Loading...</div>;
  }
  return (
    <div className="viewposts">
      <h3 className="verposts">Posts</h3>
      {results.map((l) => (
        <div className="historias" key={l.id}>
          <Link to={`/post/${l.id}`}>{l.post}</Link>

          <p>{l.user}</p>
        </div>
      ))}
      {!results.data.length && <i>No se han encontrado historias</i>}
    </div>
  );
}
export default Posts;

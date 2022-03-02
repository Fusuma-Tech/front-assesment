//import { Link } from "react-router-dom";
import "./listItem.css";

function ListItem({ list }) {
  return (
    <div>
      <span className="user">{list.user}</span>

      <span className="name">{list.name}</span>
    </div>
  );
}

export default ListItem;

// <Link className="name" to={`/post/${list.id}`}>
//{list.name}
//</Link>

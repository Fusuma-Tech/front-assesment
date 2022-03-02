import { useParams } from "react-router-dom";
import DeletePost from "../deletePost";
import CreateComment from "./createComment";
import useFetch from "./useFetch";

function Post() {
  const { id } = useParams();
  const post = useFetch(`http://localhost:3001/post/${id}`);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Post</h1>
      <div>
        <h3 className="verPost">{post.user}</h3>
        <div className="story">
          <p>{post.name}</p>
        </div>
        <CreateComment />
        <DeletePost />
      </div>
    </div>
  );
}

export default Post;

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./Posts.css";
import Form from "../Forms/Form";
import { deletePost, getAllPosts } from "../../services/posts";
const Posts = () => {
  const [posts, setPosts] = useState([]);

  const loadPost = () => {
    console.log("pitis marica");
    getAllPosts().then((data) => {
      setPosts([...data]);
      console.log(data);
    });
  };

  useEffect(() => {
    loadPost();
  }, [posts]);

  return (
    <>
      <Form newPostEvent={loadPost} />
      {posts.map((post) => (
        <div className="Post-container" key={post.id}>
          <div className="Post-name">
            {post.name}
            <div className="Post-user">
              From: <strong>{post.user}</strong>{" "}
            </div>
          </div>
          <div className="Post-link-button">
            <Link to={`/comments/${post.id}`}>
              <li>
                <strong>See comments</strong>
              </li>
            </Link>
            <button
              className="Posts-button"
              onClick={() => deletePost(post.id)}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;

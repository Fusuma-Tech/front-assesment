import { useEffect, useContext } from "react";
import Post from "../components/Post";
import { deletePost, getAllPosts } from "../services/posts"
import { PostContext } from "../context/PostsContext"
import Comment from "../components/Comment";
import { Link } from "react-router-dom";

const Posts = () => {
    const {posts, setPosts, allPosts, setAllPosts}  = useContext(PostContext)
    useEffect(() => {
        async function fetchPosts() {
            const fetchedPosts = await getAllPosts()
            setPosts(fetchedPosts)
        }        
        fetchPosts()
    }, [])
   

    return (
        <div>
            {posts.map( post => ( <Post key={post.id} post={post} />)  )}
        </div>
    );
};


export default Posts;

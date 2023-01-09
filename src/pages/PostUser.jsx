import { useEffect, useContext} from "react";
import Post from "../components/Post";
import {  getAllPosts } from "../services/posts";
import { PostContext } from "../context/PostsContext";
// import { deletePost } from "../services/posts";

const Posts = () => {
    const {posts, setPosts}  = useContext(PostContext)
   
    useEffect(() => {
        async function fetchPosts() {
            const fetchedPosts = await getAllPosts()
            
            // const fetchDeletePosts = await deletePost()
            await setPosts(fetchedPosts)
        }
        
       fetchPosts()
    }, [])
   

    

    return (
        <div>
            {posts.map(post => (<Post key={post.id} post={post} />))}
        </div>
    );
};


export default Posts;


import { useState, useEffect } from 'react';
import Post from "./Post";
import { getAllPosts } from '../services/posts';


function PostsList() {

    const [state, setState] = useState({
        posts: []
    });


    useEffect(() => {
        async function fetchPosts() {
            console.log('Fetching posts...');
            setState(state => ({
                ...state,
            }))


            let posts = await getAllPosts();

            console.log(posts)



            if (!isUnmounted) {
                setState({
                    posts: posts,
                })
            }
        }

        let isUnmounted = false;

        fetchPosts();

        return () => {
            isUnmounted = true;
        }
    }, []);

    const { posts } = state



    return (

        <div>
            <h2>PostsList</h2>
            <div>
                {posts.map(post => (
                    <div>
                        <Post post={post}></Post></div>
                ))}
            </div>
        </div>
    )

}

export default PostsList;

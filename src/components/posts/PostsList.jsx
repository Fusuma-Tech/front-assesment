import { useState, useEffect } from 'react';
import Post from "./Post";
import { getAllPosts } from '../../services/posts';


function PostsList() {

    /*El state de este componente será únicamente los posts*/
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

    /*Controlador para borrar disparado por el child Post e identificado por su id*/
    const handleDeletePost = id => {
        setState(state => ({
            ...state,
            posts: posts.filter(post => (post.id != id))
        }))

    }


    const { posts } = state



    return (

        <div>
            <h2>PostsList</h2>
            <div>
                {posts.map(post => (
                    <div key={post.id} >
                        <Post post={post} onDeletePost={handleDeletePost}></Post></div>
                ))}
            </div>
        </div>
    )

}

export default PostsList;

/* Este va a ser el component principal.*/

import "../Post.css";

import { useState, useEffect } from 'react';
import Post from "./Post";
import { getAllPosts } from '../../services/posts';


function PostsList() {

    /*Iniciamos el estado: el array de posts, un objetos newPost auxiliar y otro newPostDone*/
    const [state, setState] = useState({
        posts: [],
        newPost: {
            name: '',
            user: ''
        },
        newPostDone: {
            name: '',
            user: ''
        }
    });

    /*Recuperamos los posts del servidor, con una llamada asíncrona al servicio*/
    useEffect(() => {
        async function fetchPosts() {
            console.log('Fetching posts...');
            setState(state => ({
                ...state,
            }))
            /*Función asíncrona que recupera los datos de los posts llamando al servicio services/posts*/
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
    /*Este controlador va refrescando el textarea del form que se está rellenando*/
    const handleChange = (newPost) => {

        const { name, value } = newPost.target
        setState(state => {

            return {
                ...state,
                newPost: {
                    ...state.newPost,
                    [name]: value
                }
            }
        });
    }

    /*Añadimos el post al array de posts y seteamos el estado para que se actualice la cadena de posts.*/
    const handleClick = () => {
        const newPostDone = state.newPost;
        setState(state => {

            return {
                ...state,
                newPost: {
                    name: '',
                    user: ''
                },
                newPostDone: {
                    name: newPostDone.name,
                    user: newPostDone.user
                },
                posts: [newPostDone, ...state.posts]
            }
        });

    }

    const { posts, newPost } = state

    return (
        <div>
            <h2 className="title">Posts List</h2>
            <div className='row'>
                {posts.map(post => (
                    <div key={post.id} >
                        <Post post={post} onDeletePost={handleDeletePost}></Post></div>
                ))}
            </div>
            <h2 className="title">New Post</h2>
            <div className="input-group mb-2">
                <span className="input-group-text  bg-white border-warning text-warning"><i className="fa fa-edit fa-fw"></i></span>
                <div className='row' >
                    <div className='col-75' style={{ paddingRight: "15px" }}>
                        <textarea name="name" placeholder="post..." onChange={handleChange}></textarea>
                    </div>

                    <div className='col-25'>
                        <textarea name="user" placeholder="user..." onChange={handleChange}></textarea>
                        <button className="button" onClick={handleClick} value="Comentar">Add post</button>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default PostsList;

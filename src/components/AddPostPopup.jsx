import React, { useState } from 'react';
import '../styles/AddPostPopup.css'
import { postAllKinds } from '../services';

export const AddPostPopup = ({ trigger }) => {

    const [post, setPost] = useState()
    const handlePostInput = e => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }
    const addPost = (event) => {
        post.name !== "" &&
        postAllKinds("posts", post)
        trigger()
    }

    return (
        <div>
            <form className='addPostForm'>
                <input onChange={e => handlePostInput(e)} type="text" name="user" placeholder="Your name.." required />
                <textarea onChange={e => handlePostInput(e)} className='textarea' name="name" placeholder="Some text here.." required></textarea>
                <input onClick={(event) => addPost(event)} type="button" value="Submit"></input>
            </form>
        </div>
    )
}
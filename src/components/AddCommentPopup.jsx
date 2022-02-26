import React, { useState } from 'react';
import '../styles/AddCommentPopup.css'
import { postAllKinds } from '../services';

export const AddCommentPopup = ({ postId, trigger }) => {

    const [comment, setComment] = useState({ postId: postId })

    const handleCommentInput = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    }

    const addComment = () => {
        comment.text &&
            postAllKinds("comments", comment)
        trigger()
    }

    return (
        <div className="commentPopup">
            <form className="addCommentForm"  >
                <h5>User</h5>
                <input onChange={e => handleCommentInput(e)} name='user' placeholder='User Name' type="text" className=" form-control" required />
                <h5>Comment</h5>
                <input onChange={e => handleCommentInput(e)} className="textarea  form-control" name="text" required></input>
                <button onClick={(event) => addComment(event)} type='submit'> Send Comment</button>
            </form>
        </div>
    )
}
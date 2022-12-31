import { useContext, useRef } from "react";
import { PostContext } from "../context/PostContext";
import { deleteThis, postNew } from "../services/comments";
// import { deletePost, makeNewPost } from "../services/posts";

function Button({buttonEffect,thisId,thisPost}) {
    const {postsData,commentsData,getNewComment} = useContext(PostContext);
    const userRef = useRef();
    const titleRef = useRef();

    function addComment() {
        const newCommentText = window.prompt("The text of your new comment");

        if (newCommentText !== "" && newCommentText !== null) {
            postNew("comments",{
                id:commentsData[commentsData.length-1].id + 1,
                postId: thisPost.id,
                user: thisPost.user,
                text: newCommentText
            })
            .then(getNewComment(newCommentText))
        }
    }
    
    function createPost(e) {
        e.preventDefault();
        const usuario = userRef.current.value;
        const title = titleRef.current.value;

        if (usuario !== "" && title !== "") {
            postNew("posts",{
                id: postsData[postsData-1]+1,
                user: usuario,
                name: title,
            }).then(
                getNewComment("newPost"),
                userRef.value = "",
                titleRef.value = ""
            )
        }
    }

    function deleteThisPost() {
        deleteThis("posts",thisPost.id)
        .then(getNewComment("erasedPost"));
        
    }
    
    function deleteThisComment() {
        deleteThis("comments",thisId)
        .then(getNewComment("erasedComment"))
    }

    return(
        <div>
            {buttonEffect === "add"?
                <button className="button" onClick={addComment}>Add a new comment</button>
            :buttonEffect === "create"?
                <form className="newPostContainer" onSubmit={createPost}>
                    <input type={"text"} placeholder="Usuario" ref={userRef}/>
                    <input type={"text"} placeholder="Title" ref={titleRef}/>
                    <input type={"submit"} className="button" value={"Create a new post"} />
                </form>
            :buttonEffect === "deleteComment"?
                <button className="button erase-comment" onClick={deleteThisComment}>X</button>
            :
                <button className="button erase-post" onClick={deleteThisPost}>X</button>
            }
        </div>
    )
}

export default Button;
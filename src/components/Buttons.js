import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { deleteThis, postNew } from "../services/comments";
// import { deletePost, makeNewPost } from "../services/posts";

function Button({buttonEffect,thisId,thisPost}) {
    const {postsData,commentsData,getNewComment} = useContext(PostContext);

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
        const usuario = e.target.previousSibling.previousSibling.value;
        const title = e.target.previousSibling.value;

        if (usuario !== "" && title !== "") {
            postNew("posts",{
                id: postsData[postsData-1]+1,
                user: usuario,
                name: title,
            }).then(
                getNewComment("newPost"),
                e.target.previousSibling.previousSibling.value = "",
                e.target.previousSibling.value = ""
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
                <button onClick={addComment}>Add a new comment</button>
            :buttonEffect === "create"?
                <div className="newPostContainer">
                    <input type={"text"} placeholder="Usuario"/>
                    <input type={"text"} placeholder="Title"/>
                    <button onClick={createPost}>Create a new post</button>
                </div>
            :buttonEffect === "deleteComment"?
                <button onClick={deleteThisComment}>Delete</button>
            :
                <button onClick={deleteThisPost}>Delete this post</button>
            }
        </div>
    )
}

export default Button;
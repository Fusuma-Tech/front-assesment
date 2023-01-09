import { useEffect, useContext } from "react";
// import Comments from "../components/Comment";
import { getAllComments } from "../services/comments";
import { PostContext } from "../context/PostsContext";
import Comment from "../components/Comment";

const Comments = () => {
    const { comments, setComments } = useContext(PostContext)

    useEffect(() => {
        async function fetchComments() {
            const fetchedPosts = await getAllComments()

            // const fetchDeletePosts = await deletePost()
            await setComments(fetchedPosts)
        }

        fetchComments()
    }, [])



    return (
        <div className="Comment-container">

            <div>
                {comments.map(comment => (<Comment key={comment.id} comment={comment} />))}
            </div>
        </div>
    )
 
};


export default Comments;


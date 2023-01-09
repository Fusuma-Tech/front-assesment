import Button from "./Button";
import { deletePost } from "../services/posts";
import '../style/Posts.css'
import CommentUser from '../pages/CommentUser'

export default function Post({ post }) {
    return (

        <div className="post-container">
            <div className="post-name">{post.name}</div>
            <div>{post.user}</div>
            <Button text={'Delte'} onClick={() => deletePost(post.id)} />
            <Button text={'Add Comment'} />
            {/* Configrar el post con el post.id */}
            {/* <CommentUser /> */}
        </div>
    )
}
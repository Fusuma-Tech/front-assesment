import Button from "./Button";
import { deletePost } from "../services/posts";

export default function Post({ post }) {
    return (

        <div className="Comment-container">
            <div className="Comment-name">{post.name}</div>
            <div>{post.user}</div>
            <Button text={'Delete'} onClick={()=>deletePost(post.id)}/>
            <Button text={'Add a comment'}/>
        </div>
   )
}
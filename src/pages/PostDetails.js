import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import Button from "../components/Buttons";

function PostDetails() {
    const {postsData,commentsData,postShowed} = useContext(PostContext);
    
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Frontend Assesment - Fusuma</p>
            </header>
            <main className="App-body">
                <button className="buttonMainPage"><Link to={"/"} className="Comment-link">To main page</Link></button>
                <div key={postsData[postShowed].id} className="Comment-container">
                    <div className="Comment-name">{postsData[postShowed].user}</div>
                    <div className="Comment-name">{postsData[postShowed].name}</div>
                    {commentsData.map((comment)=>{
                    if (postsData[postShowed].id === comment.postId) {
                        return(
                        <div key={comment.id} className="comment">
                            <div>{comment.text}</div>
                            <Button buttonEffect="deleteComment" thisId={comment.id}/>
                        </div>
                        )
                    }
                    else{
                        return null
                    }
                    })}
                <Button buttonEffect="add" thisPost={postsData[postShowed]}/>
                </div>
            </main>
      </div>
    )
}

export default PostDetails;
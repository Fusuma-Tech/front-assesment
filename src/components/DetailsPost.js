import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

function DetailsPost() {
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
                        </div>
                        )
                    }
                    else{
                        return null
                    }
                    })}
                </div>
            </main>
      </div>
    )
}

export default DetailsPost;
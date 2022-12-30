import { createContext, useEffect, useState } from "react";
import { getAll } from "../services/comments";

export const PostContext = createContext();

function PostContextProvider({children}) {
    const [commentsData,getCommentsData] = useState([]);
    const [postsData,getPostsData] = useState([]);
    const [newComment,getNewComment] = useState("");
    
    const [postShowed,getPostShowed] = useState(0);
  
    useEffect(()=>{
        getAll("posts").then(posts=> getPostsData(posts));
        getAll("comments").then(comments=> getCommentsData(comments));
    },[]);
    
    async function showData() {
        getAll("posts").then(posts=> getPostsData(posts));
        getAll("comments").then(comments=> getCommentsData(comments));
    }
    useEffect(()=>{
        if (newComment !== "") {
            showData();
            getNewComment("");
        }
    },[newComment]);
    
    return(
        <PostContext.Provider value={{postsData,commentsData,getNewComment,postShowed,getPostShowed}}>
        {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider;
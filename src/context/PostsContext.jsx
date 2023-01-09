import React from "react";
import { useState } from 'react';

export const PostContext = React.createContext()

function PostContextProvider({ children }) {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    return (
        <PostContext.Provider value={{posts, setPosts,comments,setComments}}>
            {children}
        </PostContext.Provider>
    )
}
export default PostContextProvider
import {getAllKinds} from '../services'
import React, { useState, useEffect } from 'react';

export const PostView=()=>{


    //useParams y :id
    const [posts, setPosts] = useState()
    useEffect(() => {
      getAllKinds("posts").then(data => setPosts(data))
    }, [])

    return(

        <div></div>
    )
}
import { Route, Routes as ReactRoutes } from "react-router-dom";
import Posts from "../pages/PostUser";
import Header from "./Header";
import PostsForm from "./PostsForm";


export default function Routes() {
    return (
        <ReactRoutes>

            <Route path='/' element={<><Header />
                <div className="App-body">
                    Hello there
                </div>
                <PostsForm/>
                <Posts />
            </>} />
        
        </ReactRoutes>
    )
}
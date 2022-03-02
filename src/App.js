import logo from "./logo.svg";
import "./App.css";

//import Comment from "./components/Comment";
import Posts from "./services/posts";
import CreatePost from "./services/createPost";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Frontend Assesment - Fusuma</p>
        <main className="main-app">
          <Route path="/post/:id" exact>
            <Posts />
          </Route>
        </main>
      </header>
      <body className="App-body">
        Hello there
        <Posts />
        <CreatePost />
      </body>
    </div>
  );
}

export default App;

//<main className="main-app">
//        <Route path="/post/:id" exact>
//        <Post />
//    </Route>
//</main>

import { Route, BrowserRouter as Router, Routes, Redirect } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";

import PostsList from "./components/PostsList";
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Frontend Assesment - Fusuma</p>
        </header>
        <body className="App-body">
          Hello there
          <PostsList></PostsList>
        </body>
      </div>
      <Routes>
          <Route exact path="/posts" element={<PostsList/>} />
          <Route exact path="/posts/:id" element={<PostDetail/>} />
        </Routes>
    </Router>

  );
}

export default App;

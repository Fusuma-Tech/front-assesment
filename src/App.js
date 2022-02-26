import { Route, BrowserRouter as Router, Routes, Redirect } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";

import PostsList from "./components/PostsList";
import PostDetail from './components/PostDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Frontend Assesment - Fusuma</p>
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<PostsList />} />
          <Route exact path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PostList from './components/PostList/PostList';
import NewPost from './components/NewPost/NewPost';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Frontend Assesment - Fusuma</p>
      </header>
      <div className="App-body">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path='*' element={<div>404. Not Found</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

/* La web se va a comunicar entre las diferentes vistas con la ayuda de react-router-dom. Aquí se declara las rutas que va a tener la web.*/
import { Route, BrowserRouter as Router, Routes, Redirect } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import PostsList from "./components/posts/PostsList";
import PostDetail from './components/posts/PostDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Frontend Assesment - Fusuma  (by Ana Urrialde)</p>
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

import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts/Posts";

import Comments from "./components/Comments/Comments";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Frontend Assesment - Fusuma</p>
      </header>
      <body className="App-body">
        <br />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/comments/:id" element={<Comments />} />
          </Routes>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;

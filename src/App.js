import logo from "./logo.svg";
import "./App.css";

import PostsList from "./components/PostsList";

function App() {
  return (
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
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Frontend Assesment - Fusuma</p>
      </header>
      <body className="App-body">
        Hello there
        <Comment />
      </body>
    </div>
  );
}

export default App;

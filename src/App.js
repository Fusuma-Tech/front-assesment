import "./App.css";
import Home from "./pages/Home";

import PostContextProvider from "./context/PostContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <PostContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showPost" element={<PostDetails />}/>
        </Routes>
      </BrowserRouter>
    </PostContextProvider>
  );
}

export default App;

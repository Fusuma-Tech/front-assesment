import "./App.css";
import Home from "./pages/Home";

import PostContextProvider from "./context/PostContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPost from "./components/DetailsPost";

function App() {
  return (
    <PostContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showPost" element={<DetailsPost />}/>
        </Routes>
      </BrowserRouter>
    </PostContextProvider>
  );
}

export default App;

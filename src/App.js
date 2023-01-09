import "./App.css";
import Routes from "./components/Routes";
import PostsContextProvider from "./context/PostsContext";



export default function App() {
  return (
    <PostsContextProvider>
      <div className="App">
          <Routes />
      </div>
    </PostsContextProvider>
  );
}
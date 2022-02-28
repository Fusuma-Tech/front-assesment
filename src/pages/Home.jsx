import logo from "../logo.svg";
import post from "../img/post.jpg"
import "../App.css";
import PostList from '../components/PostList'


function Home() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Frontend Assesment - Fusuma</p>
      </header>
      <div className="App-body">
        <img src={post} className="postHome" alt="logo" />
        <PostList />
      </div>
    </div>
  );
}

export default Home;
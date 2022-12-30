import logo from "../logo.svg";
import Comment from "../components/Comment";
import Button from "../components/Buttons";

function Home() {
    
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Frontend Assesment - Fusuma</p>
            </header>
            <main className="App-body">
                <Button buttonEffect="create"/>
                <Comment />
            </main>
      </div>
    )
}

export default Home;
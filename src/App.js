import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import CustomInput from './CustomInput';
import PostList from './PostList';

function App() {

  const urlApi = "https://jsonplaceholder.typicode.com/posts" 

  let [algo, setAlgo] = useState("caca")
  let [posts, setPosts] = useState([])


  const meOnChange = (text) => {
    console.log(text)
    setAlgo(text)
  }

  useEffect(() => {
  
    fetch(urlApi)
    .then(response => response.json())
    .then(data => setPosts(data));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {algo}
        </a>
        <CustomInput title="prueba de titulo" onChangeParent={meOnChange}/>
        <PostList  posts={posts} />
      </header>
    </div>
  );
}

export default App;

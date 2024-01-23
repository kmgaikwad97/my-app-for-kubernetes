import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src="./k8.svg" className="App-logo" alt="logo" /> */}
        <p>
          Hello Devops !! I am learning k8.
        </p>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/news/learn-kubernetes-in-under-3-hours-a-detailed-guide-to-orchestrating-containers-114ff420e882/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn K8
        </a>
      </header>
    </div>
  );
}

export default App;

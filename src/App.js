import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esta es la tienda de Juan
        </p>
        <a
          className="App-link"
          href="https://github.com/JuandGomezS"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB DE JUAN
        </a>
      </header>
    </div>
  );
}

export default App;

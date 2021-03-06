import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./myComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>sơn Đào</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

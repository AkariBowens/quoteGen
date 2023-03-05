import "./App.css";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <div className="generator">
        <Quote />
      </div>
    </div>
  );
}

export default App;

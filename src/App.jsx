import logo from "./sunny-500px.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [numb, setNumb] = useState(0);
  const Add = (num) => setNumb(Math.floor(Math.random() * 100) + 1);  
  return (
    <div className="App">
      <div></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>SUNNY</h1>
        <p>web development</p>
        <div>
          <button onClick={() => Add()}>Sortear</button>
          <span>{numb}</span>
        </div>
      </header>
    </div>
  );
}

export default App;

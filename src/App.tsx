import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Game } from "./components/Game";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Game />
    </div>
  );
};

export default App;

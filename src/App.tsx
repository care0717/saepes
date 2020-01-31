import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Board } from "./components/Board";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <Board height={9} width={9} />
      </body>
      <style jsx>{`
        body {
          background-color: #282c34;
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default App;

import React from "react";
import Controls from "./components/Controls.js";
import TodosList from "./components/TodosList.js";
import Board from "./components/Board";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div className="Header">React Trello</div>
      <Controls />
      <Board />
    </div>
  );
}

export default App;

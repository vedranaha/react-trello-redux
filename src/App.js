import React from "react";
import Controls from "./components/Controls.js";
import TodosList from "./components/TodosList.js";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div className="Header">React Trello Clone</div>
      <Controls />
      <TodosList />
    </div>
  );
}

export default App;

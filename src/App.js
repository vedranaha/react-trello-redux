import React from "react";
import Controls from "./components/Controls.js";
import TodosList from "./components/TodosList.js";
import Board from "./components/Board";
import "./App.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function App(props) {
  return (
    <DragDropContext>
      <Droppable droppableId="app">
        {" "}
        {(provided) => (
          <div
            className="app"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            ...
          </div>
        )}
        <div className="App">
          <div className="Header">React Trello</div>
          <Controls />
          <Board />
        </div>
      </Droppable>
    </DragDropContext>
  );
}

export default App;

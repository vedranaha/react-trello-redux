import React from "react";
import { connect } from "react-redux";
import TodosList from "./TodosList";
import "./Board.css";

function Board(todo) {
  return (
    <div className="board">
      <TodosList />
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.visibility,
});

const connected = connect(mapStateToProps)(Board);
export default connected;

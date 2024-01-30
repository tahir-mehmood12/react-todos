// Todos.js
import React from "react";
import CreateTodo from "../Components/todos/CreateTodo";
import TodoList from "../Components/todos/TodoList";

import "../Styles/TodoStyle.scss";

export default function Todos() {
  return (
    <>
      <div className="main">
        <div className="create-todo">
          <CreateTodo />
        </div>
        <div className="todo-list">
          <TodoList />
        </div>
      </div>
    </>
  );
}

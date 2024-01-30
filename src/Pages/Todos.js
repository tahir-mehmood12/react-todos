// Todos.js
import React from "react";
import CreateTodo from "../Components/CreateTodo";
import TodoList from "../Components/TodoList";
import TodoDetail from "../Components/TodoDetail";

import "../Styles/TodoStyle.scss";

export default function Todos() {
  return (
    <>
      <div className="main">
        <div className="createtodo">
          <CreateTodo />
        </div>
        <div className="todolist">
          <TodoList />
          <TodoDetail />
        </div>
      </div>
    </>
  );
}

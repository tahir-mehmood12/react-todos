import React from "react";
import CreateTodo from "../Components/todos/CreateTodo";

import "../Styles/TodoStyle.scss";
import TodoList from "../Components/todos/todosList/TodosList";

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

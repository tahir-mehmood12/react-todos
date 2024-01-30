import React from "react";
import TodoList from "../Components/todos/TodoList";
import "../Styles/TodoStyle.scss";

export default function MyTodos() {
  return (
    <>
      <div className="main">
        <div className="todolist">
          <TodoList />
        </div>
      </div>
    </>
  );
}

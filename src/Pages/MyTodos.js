import React from "react";
import TodoList from "../Components/TodoList";
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

import React from "react";
import TodoList from "../Components/todos/TodoList";
import "../Styles/TodoStyle.scss";
import { NavLink } from "react-router-dom";

export default function MyTodos() {
  return (
    <>
      <div className="main">
        <div className="todolist">
          <TodoList />
        </div>
      </div>
      <div className="create-todo-btn">
        <NavLink to="/todos">
          <button>Add Todo</button>
        </NavLink>
      </div>
    </>
  );
}

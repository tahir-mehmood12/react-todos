// Todos.js
import React from "react";
import CreateTodo from "../Components/CreateTodo";
import TodoList from "../Components/TodoList";
import TodoDetail from "../Components/TodoDetail";

export default function Todos() {
  return (
    <>
      <CreateTodo />
      <TodoList />
      <TodoDetail />
    </>
  );
}

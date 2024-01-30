import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../../Store/todoSlice";

import "../../Styles/TodoStyle.scss";

export default function CreateTodo() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch();

  function handleForm(e) {
    e.preventDefault();
    dispatch(
      addTodo({
        id: new Date().getTime(),
        text: todoTitle,
        description: todoDescription,
      })
    );
    setTodoTitle("");
    setTodoDescription("");
  }
  return (
    <>
      <form className="todo-form" onSubmit={handleForm}>
        <div>
          <label>Enter Title *</label>
          <input
            type="text"
            placeholder="Enter todo Title"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            required
          />
          <label>Enter Description *</label>
          <input
            placeholder="Enter todo description"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
            required
          />
          <button type="submit">Add Todo</button>
        </div>
      </form>
    </>
  );
}

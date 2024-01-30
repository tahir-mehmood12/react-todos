import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Store/todoSlice";
// import styles from "../Styles/CreateTodo.scss";

export default function CreateTodo() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch();
  //   const todos = useSelector((state) => state.todos.todos);

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
      <form className="createtodoform" onSubmit={handleForm}>
        <label>Enter Title *</label>
        <input
          type="text"
          placeholder="Enter todo Title"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          required
          //   className={styles.input}
        />
        <label>Enter Description *</label>
        <input
          placeholder="Enter todo description"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
          required
          //   className={styles.input}
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}

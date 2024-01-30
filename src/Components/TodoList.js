import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteTodo } from "../Store/todoSlice";
import EditTodoModal from "./EditTodoModal";
import { editTodo, toggleTodo } from "../Store/todoSlice";

export default function TodoList() {
  const [editTodoData, setEditTodoData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (todo) => {
    setEditTodoData(todo);
    setShowModal(true);
  };

  const handleSave = (updatedTodo) => {
    dispatch(editTodo(updatedTodo));
    setEditTodoData(null);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setEditTodoData(null);
    setShowModal(false);
  };

  const handleCheckboxChange = (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    dispatch(toggleTodo(updatedTodo));
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ backgroundColor: todo.completed && "#1EE148" }}
          >
            <div className="todo-detail">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheckboxChange(todo)}
              />
              <div className="display-todo">
                <strong>
                  {todo.text}
                  {todo.completed ? " (Done )" : ""}
                </strong>
                <span>{todo.description}</span>
              </div>
            </div>
            <div className="todo-actions">
              <FaEdit className="edit-icon" onClick={() => handleEdit(todo)} />
              <FaTrash
                className="delete-icon"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
          </li>
        ))}
      </ul>
      {showModal && (
        <EditTodoModal
          todo={editTodoData}
          onSave={handleSave}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
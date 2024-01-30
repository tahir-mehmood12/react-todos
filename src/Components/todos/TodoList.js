import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteTodo } from "../../Store/todoSlice";
import EditTodoModal from "./EditTodoModal";
import { editTodo, toggleTodo } from "../../Store/todoSlice";
import "../../Styles/TodoStyle.scss";

export default function TodoList() {
  const [editTodoData, setEditTodoData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState("all"); // Default filter type

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

  const filteredTodos = () => {
    switch (filterType) {
      case "complete":
        return todos.filter((todo) => todo.completed);
      case "incomplete":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  const handleDeleteAllTodos = () => {
    todos.forEach((todo) => dispatch(deleteTodo(todo.id)));
  };

  const handleDeleteCompletedTodos = () => {
    const completedTodos = todos.filter((todo) => todo.completed);
    completedTodos.forEach((todo) => dispatch(deleteTodo(todo.id)));
  };

  return (
    <>
      <div className="todo-list">
        <div className="todos-list">
          <h1>Your Todos</h1>
          {filteredTodos().length > 0 && (
            <div>
              <button onClick={() => setFilterType("all")}>All</button>
              <button onClick={() => setFilterType("complete")}>
                Complete
              </button>
              <button onClick={() => setFilterType("incomplete")}>
                Incomplete
              </button>
            </div>
          )}
          <ul>
            {filteredTodos().map((todo) => (
              <li
                key={todo.id}
                style={{ backgroundColor: todo.completed && "#1EE148" }}
              >
                <div className="todo-detail">
                  <input
                    type="checkbox"
                    className="checkbox"
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
                  <FaEdit
                    className="edit-icon"
                    onClick={() => handleEdit(todo)}
                  />
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
          {filteredTodos().length > 0 && (
            <div>
              <button onClick={handleDeleteCompletedTodos}>
                Delete Complete Todos
              </button>
              <button onClick={handleDeleteAllTodos}>Delete All Todos</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

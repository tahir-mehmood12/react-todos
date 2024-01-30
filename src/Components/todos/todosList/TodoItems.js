import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function TodoItem({ todo, onCheckboxChange, onEdit, onDelete }) {
  return (
    <li key={todo.id} style={{ backgroundColor: todo.completed && "#1EE148" }}>
      <div className="todo-detail">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onCheckboxChange(todo)}
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
        <FaEdit className="edit-icon" onClick={() => onEdit(todo)} />
        <FaTrash className="delete-icon" onClick={() => onDelete(todo.id)} />
      </div>
    </li>
  );
}

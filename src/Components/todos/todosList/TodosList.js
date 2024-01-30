import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteTodo } from "../../../Store/todoSlice";
import EditTodoModal from "../../todos/EditTodoModal";
import { editTodo, toggleTodo, deleteTodo } from "../../../Store/todoSlice";
import FilterTodosButton from "./FilterTodosButton";
import TodoItem from "./TodoItems";
import DeleteTodoButtons from "./deleteTodoButtons";

export default function TodoList() {
  const [editTodoData, setEditTodoData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState("all");

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
      <div>
        <h1>Your Todos</h1>
        <FilterTodosButton setFilterType={setFilterType} />
        <ul>
          {filteredTodos().map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCheckboxChange={handleCheckboxChange}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </ul>
        <EditTodoModal
          todo={editTodoData}
          onSave={handleSave}
          onClose={handleCloseModal}
          showModal={showModal}
        />
        <DeleteTodoButtons
          onDeleteCompleted={handleDeleteCompletedTodos}
          onDeleteAll={handleDeleteAllTodos}
        />
      </div>
    </>
  );
}

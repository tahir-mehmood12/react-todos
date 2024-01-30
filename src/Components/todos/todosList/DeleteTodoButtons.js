import React from "react";

export default function DeleteTodosButton({ onDeleteCompleted, onDeleteAll }) {
  return (
    <div>
      <button onClick={onDeleteCompleted}>Delete Complete Todos</button>
      <button onClick={onDeleteAll}>Delete All Todos</button>
    </div>
  );
}

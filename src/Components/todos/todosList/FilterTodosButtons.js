import React from "react";

export default function FilterTodosButton({ setFilterType }) {
  return (
    <div>
      <button onClick={() => setFilterType("all")}>All</button>
      <button onClick={() => setFilterType("complete")}>Complete</button>
      <button onClick={() => setFilterType("incomplete")}>Incomplete</button>
    </div>
  );
}

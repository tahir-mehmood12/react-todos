import React from "react";

export default function Todos() {
  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <input type="text" />
        <input type="text" />
        <button>Add Todo</button>
      </form>
    </>
  );
}

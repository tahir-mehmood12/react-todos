import React from "react";
import "../Styles/HomeStyle.scss";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="todo-home">
        <h1>Welcome to My Todo App</h1>
        <p>
          This Todo app provides a simple and intuitive way to organize your
          tasks. Whether you're managing your daily activities or planning a
          project, our app helps you keep track of what needs to be done.
        </p>

        <p>
          Get started by adding your first task and enjoy a more organized and
          productive life!
        </p>
        <NavLink to="/todos">
          <button>Create Todo</button>
        </NavLink>
      </div>
    </>
  );
}

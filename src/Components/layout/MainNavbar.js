import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/NavbarStyle.scss";

export default function MainNavbar() {
  const [isNavbarVisible, setNavbarVisibility] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisibility(!isNavbarVisible);
  };

  return (
    <>
      <header>
        <button className="toggle-button" onClick={toggleNavbar}>
          ☰
        </button>
        <p className="logo-text">Todos</p>
        <nav className={isNavbarVisible ? "visible" : "hidden"}>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/todoslist">TodosList</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavbarStyle.scss";

export default function MainNavbar() {
  const [isNavbarVisible, setNavbarVisibility] = useState(true);

  const toggleNavbar = () => {
    setNavbarVisibility(!isNavbarVisible);
  };

  return (
    <>
      <header>
        <button className="toggle-button" onClick={toggleNavbar}>
          ☰
        </button>
        <nav className={isNavbarVisible ? "visible" : "hidden"}>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/todos">TodosList</NavLink>
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

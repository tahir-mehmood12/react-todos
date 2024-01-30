import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavbarStyle.scss";
export default function MainNavbar() {
  return (
    <>
      <header>
        <nav>
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

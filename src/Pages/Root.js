import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../Components/layout/MainNavbar";

export default function Root() {
  return (
    <>
      <MainNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

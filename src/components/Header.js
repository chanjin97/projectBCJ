import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="headWrap">
        <div className="container flex justify-between py-4 px-8">
          <NavLink to="/">
            <h1>로고</h1>
          </NavLink>
          <ul className="topMenu flex bg-red-300">
            <li>
              <NavLink to="/pro">Project</NavLink>
            </li>
            <li>
              <NavLink to="/lib">Library</NavLink>
            </li>
            <li>
              <NavLink to="/adr">Adress</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <ul className="nav-container">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/calculator">Calculator</a>
      </li>
    </ul>
  );
}

export default NavBar;

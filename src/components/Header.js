import React from "react";

import "../styles/main.css";
import "../styles/Header.css";

import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <nav>
      <div className="conduit-container">
        <a className="navbar-brand">conduit</a>
        <ul className="navar-nav">
          <li className="nav-items">
            <NavLink activeClassName="selected" className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink activeClassName="active" className="nav-link" to="/signin">
              Sign In
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink activeClassName="active" className="nav-link" to="/signup">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

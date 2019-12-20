import React from "react";

import "../styles/main.css";
import "../styles/Header.css";

import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav>
      <div className="conduit-container">
        <a className="navbar-brand">conduit</a>
        <ul className="navar-nav">
          <li className="nav-items">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

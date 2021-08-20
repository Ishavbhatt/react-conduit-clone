import React from "react";

import "../styles/main.css";
import "../styles/Header.css";

import { NavLink } from "react-router-dom";
import { GiBookmarklet } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";

function Header(props) {
  return (
    <div>
      {!localStorage.token ? (
        <nav>
          <div className="conduit-container">
            <a className="navbar-brand">conduit</a>
            <ul className="navar-nav">
              <li className="nav-items">
                <NavLink
                  activeClassName="active"
                  exact
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-items">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/signin"
                >
                  Sign In
                </NavLink>
              </li>
              <li className="nav-items">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav>
          <div className="conduit-container">
            <a className="navbar-brand">conduit</a>
            <ul className="navar-nav">
              <li className="nav-items">
                <NavLink
                  activeClassName="active"
                  exact
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-items">
                <GiBookmarklet className="icon" />
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/newpost"
                >
                  New Post
                </NavLink>
              </li>
              <li className="nav-items">
                <IoIosSettings className="icon" />
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/setting"
                >
                  Setting
                </NavLink>
              </li>
              <li className="nav-items">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Header;

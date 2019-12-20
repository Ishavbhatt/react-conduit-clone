import React from "react";

import "../styles/main.css";
import "../styles/Header.css";
import { Link } from "react-router-dom";

import { GiBookmarklet } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";

export default function Signinheader(props) {
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
            <GiBookmarklet className="icon" />
            <Link className="nav-link" to="/newpost">
              New Post
            </Link>
          </li>
          <li className="nav-items">
            <IoIosSettings className="icon" />
            <Link className="nav-link" to="/setting">
              Setting
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

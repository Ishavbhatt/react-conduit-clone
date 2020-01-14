import React from "react";

import "../styles/main.css";
import "../styles/Profile.css";
import { Link } from "react-router-dom";

import { FaSmileBeam } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="smiley-div">
          <FaSmileBeam className="smiley-icon" />
        </div>
        <p className="profile-username">username</p>
        <div className="editprofile-div">
          <Link to="/setting" className="editprofile-btn">
            <IoIosSettings />
            Edit Profile Setting
          </Link>
        </div>
      </div>
      <div classNam="myarticles-toggle">
        <ul className="navbar-myarticles">
          <li className="nav-item">
            <a href="" className="navlink-colored">
              My Articles
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="navlink-withoutcolor">
              Favorited Articles
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

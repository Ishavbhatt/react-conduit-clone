import React from "react";

import "../styles/main.css";
import "../styles/Profile.css";
import { Link } from "react-router-dom";

import { GoSmiley } from "react-icons/fa";
import { GoHeart } from "react-icons/go";




export default function SingleArticle() {
  return (
    <div className="singlearticle-page">
      <div className="user-info">
        <h2>article.title</h2>
        <div>
        <GoSmiley className="user-image" />
<button>+ Follow</button>
<GoHeart className="like-button" />

<button><span></span></button>

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

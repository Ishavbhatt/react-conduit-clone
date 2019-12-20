import React from "react";

import "../styles/main.css";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="banner-container">
          <h1 className="banner-heading">Conduit</h1>
          <p className="banner-title">A Place to share your knowledge</p>
        </div>
      </div>
      <div className="global-feed">
        <ul className="nav">
          <li>
            <a className="globalfeed-heading">Global Feed</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

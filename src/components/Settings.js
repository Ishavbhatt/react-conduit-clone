import React from "react";

import "../styles/main.css";
import "../styles/Settings.css";

export default function Settings() {
  return (
    <div className="settting-page">
      <h2 className="setting-heading">Your Settings</h2>
      <div>
        <form className="setting-form">
          <div className="setting-formdiv">
            <input
              className="urlofpic"
              type="text"
              placeholder="URL of Profile Picture"
            ></input>
          </div>
          <div className="setting-formdiv">
            <input
              className="setting-username"
              type="text"
              placeholder="New Username"
            ></input>
          </div>
          <div className="setting-formdiv">
            <textarea
              className="short-bio"
              type="text"
              placeholder="Short Bio About You"
            ></textarea>
          </div>
          <div className="setting-formdiv">
            <input
              type="email"
              placeholder="Email"
              className="new-email"
            ></input>
          </div>
          <div className="setting-formdiv">
            <input
              type="password"
              placeholder="New Password"
              className="new-password"
            ></input>
          </div>
          <div className="buttons">
            <button className="setting-btn">Update Settings</button>
          </div>
        </form>
      </div>
      <div className="logoutbutton-div">
        <button className="logout-btn">or click here to logout.</button>
      </div>
    </div>
  );
}
